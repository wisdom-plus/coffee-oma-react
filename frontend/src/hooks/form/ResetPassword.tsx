import { useNavigate } from 'react-router-dom';
import { useForm, UseFormReturn } from 'react-hook-form';
import { Fetchpasswordreset } from 'apis/Session';

const useResetPassword = (): {
  methods: UseFormReturn<{ email: string }>;
  onSubmit: (data: { email: string }) => Promise<void>;
} => {
  const navigate = useNavigate();
  const methods = useForm<{ email: string }>({
    criteriaMode: 'all',
    mode: 'onBlur',
  });

  const onSubmit = async (data: { email: string }) => {
    try {
      const response = await Fetchpasswordreset(data);
      if (response === 200) {
        navigate('/send_mail', {
          state: {
            message: 'メールを送信しました。',
            type: 'success',
          },
        });
      }
    } catch (e) {
      navigate('/', {
        state: { message: 'エラーが発生しました。', type: 'error' },
      });
    }
  };

  return { methods, onSubmit };
};

export default useResetPassword;
