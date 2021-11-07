import { FC } from 'react';
import FollowButton from 'components/atoms/FollowButton';
import useFollowButton from 'hooks/FollowButton';

const EnhancedFollowButton: FC = () => {
  const { state, onFollow, onFollowed } = useFollowButton();

  return (
    <FollowButton state={state} onFollow={onFollow} onFollowed={onFollowed} />
  );
};

export default EnhancedFollowButton;
