import { FC, useState, useEffect } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { FetchLikeCreate, FetchLikeDestroy, FetchLikeExists } from 'apis/Like';
import { useParams } from 'react-router-dom';

const LikedButton: FC = () => {
  const [state, setState] = useState({ liked: false });
  const [likecount, setLikeCount] = useState<number>(0);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    FetchLikeExists(id)
      .then((result) => {
        if (result !== 0 && result.status === 200) {
          setState((prev) => ({ ...prev, liked: true }));
          setLikeCount(() => result.data.count);
        } else if (result !== 0) {
          setLikeCount(() =>
            result.data.count === undefined ? 0 : result.data.count,
          );
        }
      })
      .catch(() => setState({ liked: false }));
  }, [id]);

  const onCreate = () =>
    FetchLikeCreate(id).then(
      (result) =>
        result !== 500 &&
        (setState((prevState) => ({ ...prevState, liked: true })),
        setLikeCount((c) => c + 1)),
    );

  const onDestroy = () =>
    FetchLikeDestroy(id).then(
      (result) =>
        result !== 500 &&
        (setState((prevState) => ({ ...prevState, liked: false })),
        setLikeCount((c) => c - 1)),
    );

  return state.liked ? (
    <Button color="red" circular onClick={onDestroy}>
      <Icon name="heart" color="red" />
      Like({likecount})
    </Button>
  ) : (
    <Button circular onClick={onCreate}>
      <Icon name="heart" color="grey" />
      Like({likecount})
    </Button>
  );
};

export default LikedButton;
