import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Fetchsessiondestroy } from 'apis/Session';
import { useResetRecoilState } from 'recoil';
import LoginState from 'atom';

type State = {
  logout: boolean;
};

const useSignout = (): State => {
  const [state, setState] = useState<State>({ logout: false });
  const history = useHistory();
  const resetUser = useResetRecoilState(LoginState);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
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
      setTimeout(() => history.push('/'), 6000);
    }

    return (): void => {
      isMounted = false;
    };
  }, [history, resetUser]);

  return state;
};

export default useSignout;
