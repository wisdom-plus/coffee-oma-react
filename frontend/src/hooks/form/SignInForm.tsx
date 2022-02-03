import { useCallback } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Session } from 'model/index';
import { Fetchsessionnew } from 'apis/Session';
import { useSetRecoilState } from 'recoil';
import LoginState from 'Atom';
import { useCookies } from 'react-cookie';
/* eslint-disable react/jsx-props-no-spreading */

const useSignInForm = (): {
  methods: UseFormReturn<Session>;
  onSubmit: (data: Session) => Promise<void>;
} => {
  const navigate = useNavigate();
  const methods = useForm<Session>({ criteriaMode: 'all', mode: 'onBlur' });
  const setUser = useSetRecoilState(LoginState);
  const [, setCookies] = useCookies(['token']);
  const limittime = useCallback(() => {
    const today = new Date();
    const limit = new Date(today.setDate(today.getDate() + 7));

    return limit;
  }, []);

  const onSubmit = async (data: Session) => {
    try {
      const response = await Fetchsessionnew(data);
      setUser((prevUser) => ({ ...prevUser, ...response.data }));
      const token = {
        'access-token': response.headers['access-token'],
        client: response.headers.client,
        uid: response.headers.uid,
      };
      setCookies('token', token, {
        path: '/',
        expires: limittime(),
      });
      navigate('/', {
        state: {
          message: 'ログインに成功しました。',
          type: 'success',
        },
      });
    } catch (e) {
      navigate('/sign_in', {
        state: {
          message: 'ログインに失敗しました。',
          type: 'error',
        },
      });
    }
  };

  return { methods, onSubmit };
};

export default useSignInForm;
