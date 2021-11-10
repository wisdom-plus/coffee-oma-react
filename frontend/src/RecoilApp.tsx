import { FC, useEffect } from 'react';
import { atom, useSetRecoilState } from 'recoil';
import { CurrentUser } from 'model/index';
import { Fetchsessionvaildate } from 'apis/Session';
import { useCookies } from 'react-cookie';

import { useQuery } from 'react-query';

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

  const { data: currentuser, isSuccess } = useQuery(
    [cookie, 'user'],
    () => Fetchsessionvaildate(cookie.token),
    {
      enabled: !!cookie.token,
    },
  );

  useEffect(() => {
    if (isSuccess && currentuser) {
      setUser((prevUser) => ({ ...prevUser, ...currentuser.data }));
    }
  }, [currentuser, isSuccess, setUser]);

  return <>{children}</>;
};

export default LoginState;
