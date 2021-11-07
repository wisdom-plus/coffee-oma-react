import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Fetchsessiondestroy } from 'apis/Session';
import { useResetRecoilState } from 'recoil';
import LoginState from 'atom';
import { useCookies } from 'react-cookie';
import { Token } from 'model/index';

const useSignout = (): {
  logout: boolean;
} => {
  const [state, setState] = useState<{
    logout: boolean;
  }>({ logout: false });
  const history = useHistory();
  const resetUser = useResetRecoilState(LoginState);
  const [cookie, , removeCookie] = useCookies(['token']);

  useEffect(() => {
    const API = async (): Promise<void> => {
      try {
        const response = await Fetchsessiondestroy(cookie as { token: Token });
        if (response === 200) {
          resetUser();
          setState((prev) => ({ ...prev, logout: true }));
          removeCookie('token');
        } else {
          history.push('/', {
            message: 'ログアウトに失敗しました。',
            type: 'error',
          });
        }
      } catch (e) {
        history.push('/', {
          message: 'ログアウトに失敗しました。',
          type: 'error',
        });
      }
    };
    const timer = setTimeout(() => history.push('/'), 5000);
    void API();

    return (): void => {
      clearTimeout(timer);
    };
  }, [history, resetUser]);

  return state;
};

export default useSignout;
