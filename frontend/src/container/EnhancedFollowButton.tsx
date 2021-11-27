import { FC } from 'react';
import FollowButton from 'components/atoms/FollowButton';
import useFollowButton from 'hooks/FollowButton';

const EnhancedFollowButton: FC = () => {
  const { follow, onFollow, onFollowed } = useFollowButton();

  return <FollowButton {...{ follow, onFollow, onFollowed }} />;
};

export default EnhancedFollowButton;
