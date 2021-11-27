import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FetchFollow, FetchFollowed, FetchFollowExists } from 'apis/Follow';
import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';

const useFollowButton = (): {
  state: boolean;
  onFollow: () => void;
  onFollowed: () => void;
} => {
  const [state, setState] = useState(false);
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [cookie] = useCookies(['token']);
  useQuery([id, 'follow'], () => FetchFollowExists(id, cookie.token), {
    onSuccess: (data) => {
      if (data === 200) {
        setState(() => true);
      } else {
        setState(() => false);
      }
    },
    onError: () =>
      history.push('/', { message: 'エラーが発生しました。', type: 'error' }),
  });

  const onFollow = async () => {
    try {
      const response = await FetchFollow(id, cookie.token);
      if (response === 201) {
        setState((prev) => !prev);
      }
    } catch (e) {
      history.push(`/registration/${id}`, {
        message: 'エラーが発生しました。',
        type: 'error',
      });
    }
  };

  const onFollowed = async () => {
    try {
      const response = await FetchFollowed(id, cookie.token);
      if (response === 201) {
        setState((prev) => !prev);
      }
    } catch (e) {
      history.push(`/registration/${id}`, {
        message: 'エラーが発生しました。',
        type: 'error',
      });
    }
  };

  return { state, onFollow, onFollowed };
};

export default useFollowButton;
