import { useForm, UseFormReturn } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Session } from 'model/index';
import { Fetchsessionnew } from 'apis/Session';
import { useSetRecoilState } from 'recoil';
import LoginState from 'atom';
/* eslint-disable react/jsx-props-no-spreading */

const useSignInForm = (): {
  methods: UseFormReturn<Session>;
  onSubmit: (data: Session) => Promise<void>;
} => {
  const history = useHistory();
  const methods = useForm<Session>({ criteriaMode: 'all', mode: 'onBlur' });

  const setUser = useSetRecoilState(LoginState);

  const onSubmit = async (data: Session) => {
    await Fetchsessionnew(data)
      .then((result) =>
        result !== undefined && result.data
          ? (setUser((prevUser) => ({ ...prevUser, ...result.data })),
            history.push('/', {
              message: 'ログインに成功しました。',
              type: 'success',
            }))
          : history.push('/sign_in', {
              message: 'ログインに失敗しました。',
              type: 'error',
            }),
      )
      .catch(() =>
        history.push('/sign_in', {
          message: 'エラーが発生しました。',
          type: 'error',
        }),
      );
  };

  return { methods, onSubmit };
};

export default useSignInForm;
