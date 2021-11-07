import { useForm, UseFormReturn } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Session } from 'model/index';
import { Fetchsessionnew } from 'apis/Session';
import { useSetRecoilState } from 'recoil';
import LoginState from 'atom';
import { useCookies } from 'react-cookie';
/* eslint-disable react/jsx-props-no-spreading */

const useSignInForm = (): {
  methods: UseFormReturn<Session>;
  onSubmit: (data: Session) => Promise<void>;
} => {
  const history = useHistory();
  const methods = useForm<Session>({ criteriaMode: 'all', mode: 'onBlur' });
  const setUser = useSetRecoilState(LoginState);
  const [, setCookies] = useCookies(['token']);

  const onSubmit = async (data: Session) => {
    try {
      const response = await Fetchsessionnew(data);
      setUser((prevUser) => ({ ...prevUser, ...response.data }));
      const token = {
        'access-token': response.headers['access-token'],
        client: response.headers.client,
        uid: response.headers.uid,
      };
      setCookies('token', token, { path: '/' });
      history.push('/', {
        message: 'ログインに成功しました。',
        type: 'success',
      });
    } catch (e) {
      history.push('/sign_in', {
        message: 'エラーが発生しました。',
        type: 'error',
      });
    }
  };

  return { methods, onSubmit };
};

export default useSignInForm;
