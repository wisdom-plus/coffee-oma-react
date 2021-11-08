import { FC, useLayoutEffect } from 'react';
import { atom, useSetRecoilState } from 'recoil';
import { CurrentUser } from 'model/index';
import { Fetchsessionvaildate } from 'apis/Session';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();

  useLayoutEffect(() => {
    if (cookie.token) {
      const API = async (): Promise<void> => {
        try {
          const response = await Fetchsessionvaildate(cookie.token);
          setUser((prevUser) => ({ ...prevUser, ...response.data }));
        } catch (e) {
          history.push('/', {
            message: 'エラーが発生しました。',
            type: 'error',
          });
        }
      };
      void API();
    }
  }, [setUser, cookie, history]);

  return <>{children}</>;
};

export default LoginState;
