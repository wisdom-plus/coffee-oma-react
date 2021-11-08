import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FetchFollow, FetchFollowed, FetchFollowExists } from 'apis/Follow';
import { useCookies } from 'react-cookie';

const useFollowButton = (): {
  state: boolean;
  onFollow: () => void;
  onFollowed: () => void;
} => {
  const [state, setState] = useState(false);
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [cookie] = useCookies(['token']);

  useEffect(() => {
    const API = async () => {
      try {
        const response = await FetchFollowExists(id, cookie.token);
        if (response === 201) {
          setState(() => true);
        }
      } catch (err) {
        history.push('/', { message: 'エラーが発生しました。', type: 'error' });
      }
    };
    void API();
  }, [id, history, cookie]);

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
