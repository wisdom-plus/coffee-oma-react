import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Fetchsessiondestroy } from 'apis/Session';
import { useResetRecoilState } from 'recoil';
import LoginState from 'atom';

const useSignout = (): {
  logout: boolean;
} => {
  const [state, setState] = useState<{
    logout: boolean;
  }>({ logout: false });
  const history = useHistory();
  const resetUser = useResetRecoilState(LoginState);

  useEffect(() => {
    Fetchsessiondestroy()
      .then((result) =>
        result !== undefined && result === 200
          ? (resetUser(),
            setState((prevUser) => ({ ...prevUser, logout: true })))
          : history.push('/', {
              message: 'ログアウトに失敗しました。',
              type: 'error',
            }),
      )
      .catch(() => setState({ logout: false }));
    const timer = setTimeout(() => history.push('/'), 5000);

    return (): void => {
      clearTimeout(timer);
    };
  }, [history, resetUser]);

  return state;
};

export default useSignout;
