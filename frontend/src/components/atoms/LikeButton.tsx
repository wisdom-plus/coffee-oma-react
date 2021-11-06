import { FC } from 'react';
import { Button } from 'semantic-ui-react';

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
      color="red"
      data-testid="destroy"
      icon="heart"
      content={`${state.count}`}
    />
  ) : (
    <Button
      circular
      onClick={onCreate}
      data-testid="create"
      icon="heart"
      content={`${state.count}`}
    />
  );

export default LikedButton;
