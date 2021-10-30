import { FC } from 'react';
import { Button, Icon } from 'semantic-ui-react';

type LikeState = { liked: boolean; count: number };

type Liketype = {
  state: LikeState;
  onCreate: () => void;
  onDestroy: () => void;
};

const LikedButton: FC<Liketype> = ({
  state = { liked: false, count: 0 },
  onCreate = () => undefined,
  onDestroy = () => undefined,
}) =>
  state.liked ? (
    <Button
      circular
      onClick={onDestroy}
      style={{ color: 'red' }}
      data-testid="destroy"
    >
      <Icon name="heart" color="red" />
      Like({state.count})
    </Button>
  ) : (
    <Button circular onClick={onCreate} data-testid="create">
      <Icon name="heart" color="grey" />
      Like({state.count})
    </Button>
  );

export default LikedButton;
