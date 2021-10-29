import { FC } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import useFollowButton from 'hooks/FollowButton';

const FollowButton: FC = () => {
  const { state, onFollow, onFollowed } = useFollowButton();

  return state ? (
    <Button
      icon
      color="blue"
      circular
      onClick={onFollowed}
      data-testid="destroy"
    >
      <Icon name="user plus" />
      フォロー解除
    </Button>
  ) : (
    <Button icon color="blue" circular onClick={onFollow} data-testid="create">
      <Icon name="user plus" />
      フォローする
    </Button>
  );
};

export default FollowButton;
