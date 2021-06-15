import { FC, useState, useEffect } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { FetchLikeCreate, FetchLikeDestroy, FetchLikeExists } from 'apis/Like';
import { useParams, useHistory } from 'react-router-dom';

const LikedButton: FC = () => {
  const [state, setState] = useState({ liked: false, count: 0 });
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  useEffect(() => {
    FetchLikeExists(id)
      .then((result) => {
        if (result !== 0 && result.liked) {
          setState((prev) => ({ ...prev, ...result }));
        } else if (result !== 0 && !result.liked) {
          setState((prev) => ({ ...prev, ...result }));
        } else {
          history.push(`/product/${id}`, {
            message: 'エラーが発生しました。',
            type: 'error',
          });
        }
      })
      .catch(() =>
        history.push(`/`, {
          message: 'エラーが発生しました。',
          type: 'error',
        }),
      );
  }, [id, history]);

  const onCreate = () =>
    FetchLikeCreate(id).then((result) =>
      result !== 500
        ? setState((prevState) => ({
            ...prevState,
            liked: true,
            count: prevState.count + 1,
          }))
        : history.push(`/product/${id}`, {
            message: 'エラーが発生しました。',
            type: 'error',
          }),
    );

  const onDestroy = () =>
    FetchLikeDestroy(id).then((result) =>
      result !== 500
        ? setState((prevState) => ({
            ...prevState,
            liked: false,
            count: prevState.count - 1,
          }))
        : history.push(`/product/${id}`, {
            message: 'エラーが発生しました。',
            type: 'error',
          }),
    );

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
