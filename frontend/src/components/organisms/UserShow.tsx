import { FC } from 'react';
import UserProfile from 'components/molecules/UserProfile';
import MyProfile from 'components/molecules/MyProfile';
import { useRecoilValue } from 'recoil';
import LoginState from 'atom';
import { useLocation } from 'react-router-dom';

const UserShow: FC = () => {
  const user = useRecoilValue(LoginState);
  const { pathname } = useLocation();

  return (
    <>{pathname === '/mypage' ? <MyProfile user={user} /> : <UserProfile />}</>
  );
};

export default UserShow;
