import { useSetRecoilState } from 'recoil';
import { Fetchsessionvalidate } from 'apis/Session';
import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';
import LoginState from 'atom/LoginState';
import { Token } from 'model/index';

type Props = {
  children: JSX.Element[];
};

export const RecoilApp: ({ children }: Props) => JSX.Element = ({
  children,
}) => {
  const setUser = useSetRecoilState(LoginState);
  const [cookie, , removeCookies] = useCookies(['token']);

  useQuery(
    [cookie, 'user'],
    () => Fetchsessionvalidate(cookie.token as Token),
    {
      enabled: !!cookie.token,
      onSuccess: (data) =>
        setUser((prevUser) => ({ ...prevUser, ...data.data })),
      onError: () => removeCookies('token'),
    },
  );

  return <div>{children}</div>;
};

export default RecoilApp;
