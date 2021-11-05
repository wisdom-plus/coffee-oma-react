import { FC, useLayoutEffect } from 'react';
import { atom, useSetRecoilState } from 'recoil';
import { CurrentUser } from 'model/index';
import { Fetchsessionvaildate } from 'apis/Session';

const LoginState = atom<CurrentUser>({
  key: 'LoginUser',
  default: {
    email: '',
    id: 0,
    icon: {
      url: '',
    },
    name: '',
    profile: '',
    created_at: new Date(),
  },
});

export const RecoilApp: FC = ({ children }) => {
  const setUser = useSetRecoilState(LoginState);

  useLayoutEffect(() => {
    if (localStorage.getItem('access-token') !== null) {
      const API = async (): Promise<void> => {
        try {
          const response = await Fetchsessionvaildate();
          setUser((prevUser) => ({ ...prevUser, ...response.data }));
        } catch (e) {
          throw new Error('APIエラー');
        }
      };
      void API();
    }
  }, [setUser]);

  return <>{children}</>;
};

export default LoginState;
