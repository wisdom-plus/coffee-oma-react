import { useState, Dispatch, SetStateAction } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { FetchReviewDestroy } from 'apis/Review';
import { useQueryClient, useMutation } from 'react-query';

const useReveiwRemoveButton = (
  ReviewId: number,
): {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onDestroy: () => Promise<void>;
} => {
  const { id } = useParams<{ id: string }>();
  const [cookie] = useCookies(['token']);
  const history = useHistory();
  const reviewid = ReviewId.toString();
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation(
    () => FetchReviewDestroy(id, reviewid, cookie.token),
    {
      onSuccess: (status) => {
        void queryClient.invalidateQueries([id, 'review']);
        if (status === 200) {
          history.push(`/product/${id}`, {
            message: 'レビューを削除しました。',
            type: 'success',
          });
        } else {
          history.push('/products', {
            message: 'エラーが発生しました。',
            type: 'error',
          });
        }
      },
    },
  );

  const onDestroy = async () => {
    setOpen(false);
    try {
      await mutation.mutateAsync();
    } catch (e) {
      history.push('/products', {
        message: 'エラーが発生しました。',
        type: 'error',
      });
    }
  };

  return { open, setOpen, onDestroy };
};
export default useReveiwRemoveButton;
