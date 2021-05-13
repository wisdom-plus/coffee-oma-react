import { FC, useEffect } from 'react';
import { atom, useSetRecoilState } from 'recoil';
import { CurrentUser } from 'model/index';
import { Fetchsessionvaildate } from 'apis/Session';

const LoginState = atom<CurrentUser>({
  key: 'LoginUser',
  default: {} as CurrentUser,
});

export const RecoilApp: FC = ({ children }) => {
  const setUser = useSetRecoilState(LoginState);

  useEffect(() => {
    if (localStorage.getItem('access-token') !== null) {
      Fetchsessionvaildate()
        .then(
          (result) =>
            result !== undefined && setUser(() => ({ ...result.data })),
        )
        .catch(Error);
    }
  }, [setUser]);

  return <>{children}</>;
};

export default LoginState;
