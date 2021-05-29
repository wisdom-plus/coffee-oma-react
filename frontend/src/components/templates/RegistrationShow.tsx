import { FC } from 'react';
import { Header } from 'semantic-ui-react';
import UserProfile from 'components/molecules/UserProfile';
import MyProfile from 'components/molecules/MyProfile';
import { useRecoilValue } from 'recoil';
import LoginState from 'atom';
import { useLocation } from 'react-router-dom';

const RegistrationShow: FC<{ show?: boolean }> = ({ show = false }) => {
  const user = useRecoilValue(LoginState);
  const { pathname } = useLocation();

  return (
    <>
      <Header
        as="h1"
        content={show ? 'ユーザーの詳細' : 'マイプロフィール'}
        textAlign="center"
        stryle={{ marginBottom: '3rem' }}
      />
      {pathname === '/mypage' ? <MyProfile user={user} /> : <UserProfile />}
    </>
  );
};

export default RegistrationShow;
