import { FetchLikeCreate, FetchLikeDestroy, FetchLikeExists } from 'apis/Like';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useQuery, useQueryClient, useMutation } from 'react-query';

type LikeType = { liked: boolean; count: number };

const useLikeButton = (): {
  like: LikeType;
  onCreate: () => void;
  onDestroy: () => void;
} => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const [cookie] = useCookies(['token']);
  const queryClient = useQueryClient();
  const { data: like = { liked: false, count: 0 } } = useQuery(
    [id, cookie.token, 'like'],
    () => FetchLikeExists(id, cookie.token),
    { notifyOnChangeProps: 'tracked' },
  );
  const createmutation = useMutation(() => FetchLikeCreate(id, cookie.token), {
    onMutate: () => queryClient.cancelQueries([id, cookie.token, 'like']),
    onSuccess: () => {
      const oldquery = queryClient.getQueryData<LikeType>([
        id,
        cookie.token,
        'like',
      ]);
      if (oldquery) {
        queryClient.setQueryData([id, cookie.token, 'like'], () => ({
          liked: true,
          count: oldquery.count + 1,
        }));
      }
    },
  });

  const destroymutation = useMutation(
    () => FetchLikeDestroy(id, cookie.token),
    {
      onMutate: () => queryClient.cancelQueries([id, cookie.token, 'like']),
      onSuccess: () => {
        const oldquery = queryClient.getQueryData<LikeType>([
          id,
          cookie.token,
          'like',
        ]);
        if (oldquery) {
          queryClient.setQueryData([id, cookie.token, 'like'], () => ({
            liked: false,
            count: oldquery.count - 1,
          }));
        }
      },
    },
  );

  const onCreate = async () => {
    try {
      const response = await createmutation.mutateAsync();
      if (response === 201) {
        navigate(`/products/${id}`, {
          state: {
            message: 'お気に入りに追加しました。',
            type: 'success',
          },
        });
      }
    } catch (e) {
      navigate(`/products/${id}`, {
        state: {
          message: 'エラーが発生しました。',
          type: 'error',
        },
      });
    }
  };

  const onDestroy = async () => {
    try {
      const response = await destroymutation.mutateAsync();
      if (response === 200) {
        navigate(`/products/${id}`, {
          state: {
            message: 'お気に入りを削除しました。',
            type: 'success',
          },
        });
      }
    } catch (e) {
      navigate(`/products/${id}`, {
        state: {
          message: 'エラーが発生しました。',
          type: 'error',
        },
      });
    }
  };

  return { like, onCreate, onDestroy };
};

export default useLikeButton;
