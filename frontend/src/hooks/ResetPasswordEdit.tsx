import { useLocation, useHistory } from 'react-router-dom';
import { useForm, UseFormReturn } from 'react-hook-form';
import { Fetchpasswordresetedit } from 'apis/Session';

const useResetPasswordEdit = (): {
  methods: UseFormReturn<{
    ['password_confirmation']: string;
    password: string;
  }>;
  onSubmit: (data: {
    ['password_confirmation']: string;
    password: string;
  }) => Promise<void>;
} => {
  const query = new URLSearchParams(useLocation().search);
  const history = useHistory();
  const methods = useForm<{
    password: string;
    ['password_confirmation']: string;
  }>({ criteriaMode: 'all', mode: 'onBlur' });

  const onSubmit = async (data: {
    ['password_confirmation']: string;
    password: string;
  }) => {
    const params = {
      data,
      headers: {
        'access-token': query.get('access-token') as string,
        client: query.get('client') as string,
        uid: query.get('uid') as string,
      },
    };
    await Fetchpasswordresetedit(params)
      .then((result) => result === 200 && history.push('/'))
      .catch(() =>
        history.push('/', { message: 'エラーが発生しました。', type: 'error' }),
      );
  };

  return { methods, onSubmit };
};

export default useResetPasswordEdit;
