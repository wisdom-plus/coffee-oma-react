import { FC, useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { FetchLikeCreate, FetchLikeDestroy, FetchLikeExists } from 'apis/Like';
import { useParams } from 'react-router-dom';

const LikedButton: FC = () => {
  const [state, setState] = useState({ liked: false });
  const [likeId, setLikeId] = useState<number>(0);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    FetchLikeExists(id)
      .then((result) =>
        result !== 0
          ? (setLikeId(() => result),
            setState((prev) => ({ ...prev, liked: true })))
          : setState({ liked: false }),
      )

      .catch(() => setLikeId(0));
  }, [id]);

  const onCreate = () =>
    FetchLikeCreate(id).then(
      (result) =>
        result === 201 &&
        setState((prevState) => ({ ...prevState, liked: true })),
    );

  const onDestroy = () =>
    FetchLikeDestroy(likeId).then(
      (result) =>
        result === 201 &&
        setState((prevState) => ({ ...prevState, liked: false })),
    );

  return state.liked ? (
    <Button
      content="Like"
      icon="heart"
      color="red"
      circular
      onClick={onDestroy}
    />
  ) : (
    <Button content="Like" icon="heart" circular onClick={onCreate} />
  );
};

export default LikedButton;
