import { FC } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import useLikeButton from 'hooks/LikeButton';

const LikedButton: FC = () => {
  const { state, onCreate, onDestroy } = useLikeButton();

  return state.liked ? (
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
};

export default LikedButton;
