import { FC, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Fetchsessionvaildate } from 'apis/Session';
import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';
import LoginState from 'Atom';

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

export default RecoilApp;
