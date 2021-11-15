import { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Fetchsessiondestroy } from 'apis/Session';
import { useResetRecoilState } from 'recoil';
import LoginState from 'RecoilApp';
import { useCookies } from 'react-cookie';

const useSignOut = (): void => {
  const history = useHistory();
  const resetUser = useResetRecoilState(LoginState);
  const [cookie, , removeCookie] = useCookies(['token']);
  const success = useCallback(() => {
    resetUser();
    removeCookie('token');
  }, [resetUser, removeCookie]);

  useEffect(() => {
    const API = async (): Promise<void> => {
      try {
        const status = await Fetchsessiondestroy(cookie.token);
        if (status === 200) {
          success();
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
    if (cookie.token) {
      void API();
    }

    return (): void => {
      clearTimeout(timer);
    };
  }, [history, success, cookie]);
};

export default useSignOut;
