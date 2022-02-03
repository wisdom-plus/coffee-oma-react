import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useCookies } from 'react-cookie';
import { FetchGuestLogin } from 'apis/Session';
import LoginState from 'Atom';

const useGuestLoginButton = (): (() => Promise<void>) => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(LoginState);
  const [, setCookies] = useCookies(['token']);
  const limittime = useCallback(() => {
    const today = new Date();
    const limit = new Date(today.setDate(today.getDate() + 7));

    return limit;
  }, []);

  const onLogin = async () => {
    try {
      const response = await FetchGuestLogin();
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

  return onLogin;
};

export default useGuestLoginButton;
