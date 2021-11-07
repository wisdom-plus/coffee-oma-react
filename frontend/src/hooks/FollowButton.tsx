import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FetchFollow, FetchFollowed, FetchFollowExists } from 'apis/Follow';

const useFollowButton = (): {
  state: boolean;
  onFollow: () => void;
  onFollowed: () => void;
} => {
  const [state, setState] = useState(false);
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  useEffect(() => {
    FetchFollowExists(id)
      .then((result) => result === 200 && setState(() => true))
      .catch(() =>
        history.push('/', { message: 'エラーが発生しました。', type: 'error' }),
      );
  }, [id, history]);

  const onFollow = () =>
    FetchFollow(id)
      .then((result) =>
        result === 201
          ? setState((prev) => !prev)
          : history.push(`/registration/${id}`, {
              message: 'エラーが発生しました。',
              type: 'error',
            }),
      )
      .catch();
  const onFollowed = () =>
    FetchFollowed(id)
      .then((result) =>
        result === 201
          ? setState((prev) => !prev)
          : history.push(`/registration/${id}`, {
              message: 'エラーが発生しました。',
              type: 'error',
            }),
      )
      .catch();

  return { state, onFollow, onFollowed };
};

export default useFollowButton;
