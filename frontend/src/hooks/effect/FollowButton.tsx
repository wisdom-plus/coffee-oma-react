import { useParams, useNavigate } from 'react-router-dom';
import { FetchFollow, FetchFollowed, FetchFollowExists } from 'apis/Follow';
import { useCookies } from 'react-cookie';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { Follow } from 'model/index';

const useFollowButton = (): {
  follow: Follow;
  onFollow: () => void;
  onFollowed: () => void;
} => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const [cookie] = useCookies(['token']);
  const queryClient = useQueryClient();
  const { data: follow = { follow: false } } = useQuery(
    [id, cookie.token, 'follow'],
    () => FetchFollowExists(id, cookie.token),
    {
      onError: () =>
        navigate('/', {
          state: { message: 'エラーが発生しました。', type: 'error' },
        }),
      notifyOnChangeProps: 'tracked',
    },
  );

  const createmutation = useMutation(() => FetchFollow(id, cookie.token), {
    onMutate: () => queryClient.cancelQueries([id, cookie.token, 'follow']),
    onSuccess: () => {
      const oldquery = queryClient.getQueryData<Follow>([
        id,
        cookie.token,
        'follow',
      ]);
      if (oldquery) {
        queryClient.setQueryData([id, cookie.token, 'follow'], () => ({
          follow: true,
        }));
      }
    },
  });

  const destroymutation = useMutation(() => FetchFollowed(id, cookie.token), {
    onMutate: () => queryClient.cancelQueries([id, cookie.token, 'follow']),
    onSuccess: () => {
      const oldquery = queryClient.getQueryData<Follow>([
        id,
        cookie.token,
        'follow',
      ]);
      if (oldquery) {
        queryClient.setQueryData([id, cookie.token, 'follow'], () => ({
          follow: false,
        }));
      }
    },
  });

  const onFollow = async () => {
    try {
      await createmutation.mutateAsync();
    } catch (e) {
      navigate(`/registration/${id}`, {
        state: {
          message: 'エラーが発生しました。',
          type: 'error',
        },
      });
    }
  };

  const onFollowed = async () => {
    try {
      await destroymutation.mutateAsync();
    } catch (e) {
      navigate(`/registration/${id}`, {
        state: {
          message: 'エラーが発生しました。',
          type: 'error',
        },
      });
    }
  };

  return { follow, onFollow, onFollowed };
};

export default useFollowButton;
