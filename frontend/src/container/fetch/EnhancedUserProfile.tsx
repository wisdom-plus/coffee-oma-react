import { FC } from 'react';
import UserProfile from 'components/molecules/UserProfile';
import useUserProfile from 'hooks/fetch/UserProfile';

const EnhancedUserProfile: FC = () => {
  const { user, currentuser } = useUserProfile();

  return <UserProfile user={user} currentuser={currentuser} />;
};

export default EnhancedUserProfile;
