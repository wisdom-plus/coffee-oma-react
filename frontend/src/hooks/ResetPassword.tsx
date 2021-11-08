import { useHistory } from 'react-router-dom';
import { useForm, UseFormReturn } from 'react-hook-form';
import { Fetchpasswordreset } from 'apis/Session';

const useResetPassword = (): {
  methods: UseFormReturn<{ email: string }>;
  onSubmit: (data: { email: string }) => Promise<void>;
} => {
  const history = useHistory();
  const methods = useForm<{ email: string }>({
    criteriaMode: 'all',
    mode: 'onBlur',
  });

  const onSubmit = async (data: { email: string }) => {
    try {
      const response = await Fetchpasswordreset(data);
      if (response === 200) {
        history.push('/send_mail', {
          message: 'メールを送信しました。',
          type: 'success',
        });
      }
    } catch (e) {
      history.push('/', { message: 'エラーが発生しました。', type: 'error' });
    }
  };

  return { methods, onSubmit };
};

export default useResetPassword;
