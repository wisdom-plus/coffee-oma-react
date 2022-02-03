import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fetchsessiondestroy } from 'apis/Session';
import { useResetRecoilState } from 'recoil';
import LoginState from 'atom/LoginState';
import { useCookies } from 'react-cookie';

const useSignOut = (): void => {
  const navigate = useNavigate();
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
          navigate('/', {
            state: {
              message: 'ログアウトに失敗しました。',
              type: 'error',
            },
          });
        }
      } catch (e) {
        navigate('/', {
          state: {
            message: 'ログアウトに失敗しました。',
            type: 'error',
          },
        });
      }
    };
    const timer = setTimeout(() => navigate('/'), 5000);
    if (cookie.token) {
      void API();
    }

    return (): void => {
      clearTimeout(timer);
    };
  }, [navigate, success, cookie]);
};

export default useSignOut;
