import { FC } from 'react';
import useMyProfile from 'hooks/MyProfile';
import MyProfile from 'components/molecules/MyProfile';

const EnhancedMyProfile: FC = () => {
  const user = useMyProfile();

  return <MyProfile user={user} />;
};

export default EnhancedMyProfile;
