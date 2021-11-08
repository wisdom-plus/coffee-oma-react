import { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Fetchsessiondestroy } from 'apis/Session';
import { useResetRecoilState } from 'recoil';
import LoginState from 'atom';
import { useCookies } from 'react-cookie';
import { Token } from 'model/index';

const useSignout = (): void => {
  const history = useHistory();
  const resetUser = useResetRecoilState(LoginState);
  const [cookie, , removeCookie] = useCookies(['token']);
  const success = useCallback(() => {
    resetUser();
    removeCookie('token');
  }, [resetUser, removeCookie]);

  useEffect(() => {
    const API = async (token: { token: Token }): Promise<void> => {
      try {
        const status = await Fetchsessiondestroy(token);
        if (status === 200) {
          success();
          history.push('/', {
            message: 'ログアウトに成功しました。',
            type: 'success',
          });
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
      void API(cookie as { token: Token });
    }

    return (): void => {
      clearTimeout(timer);
    };
  }, [history, success, cookie]);
};

export default useSignout;
