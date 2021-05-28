import { FC, useState, useEffect } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import { useParams, useHistory } from 'react-router-dom';
import { FetchFollow, FetchFollowed, FetchFollowExists } from 'apis/Follow';

const FollowButton: FC = () => {
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
      .then((result) => result === 201 && setState((prev) => !prev))
      .catch();
  const onFollowed = () =>
    FetchFollowed(id)
      .then((result) => result === 200 && setState((prev) => !prev))
      .catch();

  return state ? (
    <Button icon color="blue" circular onClick={onFollowed}>
      <Icon name="user plus" />
      フォロー解除
    </Button>
  ) : (
    <Button icon color="blue" circular onClick={onFollow}>
      <Icon name="user plus" />
      フォローする
    </Button>
  );
};

export default FollowButton;
