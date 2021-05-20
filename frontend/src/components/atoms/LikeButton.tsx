import { FC, useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { FetchLikeCreate, FetchLikeDestroy, FetchLikeExists } from 'apis/Like';
import { useParams } from 'react-router-dom';

const LikedButton: FC = () => {
  const [state, setState] = useState({ liked: false });
  const [likecount, setLikeCount] = useState<number>(0);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    FetchLikeExists(id)
      .then((result) =>
        result !== 0
          ? (setState((prev) => ({ ...prev, liked: true })),
            setLikeCount(() => result.count))
          : setState({ liked: false }),
      )

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
      Like({likecount})
    </Button>
  ) : (
    <Button circular onClick={onCreate}>
      Like({likecount})
    </Button>
  );
};

export default LikedButton;
