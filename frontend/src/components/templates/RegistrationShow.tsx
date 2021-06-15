import { FC } from 'react';
import { Header } from 'semantic-ui-react';
import UserProfile from 'components/molecules/UserProfile';
import MyProfile from 'components/molecules/MyProfile';
import { useLocation } from 'react-router-dom';

const RegistrationShow: FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header
        as="h1"
        content={pathname === '/mypage' ? 'マイプロフィール' : 'ユーザーの詳細'}
        textAlign="center"
        stryle={{ marginBottom: '3rem' }}
      />
      {pathname === '/mypage' ? <MyProfile /> : <UserProfile />}
    </>
  );
};

export default RegistrationShow;
