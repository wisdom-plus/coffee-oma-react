import { FC, useLayoutEffect } from 'react';
import { atom, useSetRecoilState } from 'recoil';
import { CurrentUser, Token } from 'model/index';
import { Fetchsessionvaildate } from 'apis/Session';
import { useCookies } from 'react-cookie';

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
  const [cookie] = useCookies(['token']);

  useLayoutEffect(() => {
    if (cookie) {
      const API = async (): Promise<void> => {
        try {
          const response = await Fetchsessionvaildate(
            cookie as { token: Token },
          );
          setUser((prevUser) => ({ ...prevUser, ...response.data }));
        } catch (e) {
          throw new Error('APIエラー');
        }
      };
      void API();
    }
  }, [setUser, cookie]);

  return <>{children}</>;
};

export default LoginState;
