import { useForm, UseFormReturn } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { ReviewFormData } from 'model/index';
import { FetchReviewCreate } from 'apis/Review';
import { useMutation, useQueryClient } from 'react-query';
/* eslint-disable react/jsx-props-no-spreading */

const useReviewForm = (): {
  methods: UseFormReturn<ReviewFormData>;
  onSubmit: (data: ReviewFormData) => Promise<void>;
} => {
  const methods = useForm<ReviewFormData>({
    criteriaMode: 'all',
    mode: 'onBlur',
    defaultValues: { title: '', rate: 0, content: '' },
  });
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [cookie] = useCookies(['token']);
  const RemoveRate = () => {
    const rates = document.getElementById('review-form-rating');
    if (rates) {
      const reveiwrates = rates.getElementsByClassName('active icon');
      const elements = Array.from(reveiwrates);
      elements.map((rate) => rate.classList.remove('active'));
    }
  };
  const queryClient = useQueryClient();

  const mutation = useMutation(
    ({ data }: { data: ReviewFormData }) =>
      FetchReviewCreate(data, cookie.token, id),
    {
      onSuccess: (status) => {
        void queryClient.invalidateQueries([id, 'review']);
        if (status === 201) {
          history.push(`/product/${id}`, {
            message: 'レビューが作成されました.',
            type: 'success',
          });
          methods.reset();
          RemoveRate();
        } else {
          history.push('/products', {
            message: 'エラーが発生しました。',
            type: 'error',
          });
        }
      },
    },
  );

  const onSubmit = async (data: ReviewFormData) => {
    try {
      await mutation.mutateAsync({ data });
    } catch (e) {
      history.push('/products', {
        message: 'エラーが発生しました。',
        type: 'error',
      });
    }
  };

  return { methods, onSubmit };
};

export default useReviewForm;
