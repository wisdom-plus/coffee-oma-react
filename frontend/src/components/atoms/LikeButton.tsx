import { FC } from 'react';
import { Button } from 'semantic-ui-react';

type LikeState = { liked: boolean; count: number };

type Liketype = {
  like: LikeState;
  onCreate: () => void;
  onDestroy: () => void;
};

const LikedButton: FC<Liketype> = ({
  like = { liked: false, count: 0 },
  onCreate = () => undefined,
  onDestroy = () => undefined,
}) =>
  like.liked ? (
    <Button
      circular
      onClick={onDestroy}
      color="red"
      data-testid="destroy"
      icon="heart"
      content={`${like.count}`}
    />
  ) : (
    <Button
      circular
      onClick={onCreate}
      data-testid="create"
      icon="heart"
      content={`${like.count}`}
    />
  );

export default LikedButton;
