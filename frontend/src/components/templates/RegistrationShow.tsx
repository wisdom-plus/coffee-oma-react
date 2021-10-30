import { FC } from 'react';
import { Header } from 'semantic-ui-react';
import UserProfile from 'container/EnhancedUserProfile';
import MyProfile from 'container/EnhancedMyProfile';
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
