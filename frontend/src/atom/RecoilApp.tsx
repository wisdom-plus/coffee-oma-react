import { FC } from 'react';
import { useSetRecoilState } from 'recoil';
import { Fetchsessionvalidate } from 'apis/Session';
import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';
import LoginState from 'atom/LoginState';

export const RecoilApp: FC = ({ children }) => {
  const setUser = useSetRecoilState(LoginState);
  const [cookie, , removeCookies] = useCookies(['token']);

  useQuery([cookie, 'user'], () => Fetchsessionvalidate(cookie.token), {
    enabled: !!cookie.token,
    onSuccess: (data) => setUser((prevUser) => ({ ...prevUser, ...data.data })),
    onError: () => removeCookies('token'),
  });

  return <>{children}</>;
};

export default RecoilApp;
