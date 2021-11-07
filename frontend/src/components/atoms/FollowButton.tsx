import { FC } from 'react';
import { Icon, Button } from 'semantic-ui-react';

type Followtype = {
  state: boolean;
  onFollow: () => void;
  onFollowed: () => void;
};

const FollowButton: FC<Followtype> = ({
  state = false,
  onFollow = () => undefined,
  onFollowed = () => undefined,
}) =>
  state ? (
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

export default FollowButton;
