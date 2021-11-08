import { useForm, UseFormReturn } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserInput } from 'model/index';
import { Fetchregistrationnew } from 'apis/User';
/* eslint-disable react/jsx-props-no-spreading */

const useSignUpForm = (): {
  methods: UseFormReturn<UserInput>;
  onSubmit: (data: UserInput) => Promise<void>;
} => {
  const history = useHistory();
  const methods = useForm<UserInput>({
    criteriaMode: 'all',
    mode: 'onBlur',
  });

  const onSubmit = async (data: UserInput) => {
    try {
      const response = await Fetchregistrationnew(data);
      if (response === 200) {
        history.push('/send_mail');
      } else {
        history.push('/sign_up', {
          message: '無効な入力があります。',
          type: 'error',
        });
      }
    } catch (e) {
      history.push('/sign_up', {
        message: '登録に失敗しました。',
        type: 'error',
      });
    }
  };

  return { methods, onSubmit };
};

export default useSignUpForm;
