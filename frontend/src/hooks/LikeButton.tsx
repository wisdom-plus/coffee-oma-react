import { useState, useEffect } from 'react';
import { FetchLikeCreate, FetchLikeDestroy, FetchLikeExists } from 'apis/Like';
import { useParams, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';

const useLikeButton = (): {
  state: { liked: boolean; count: number };
  onCreate: () => void;
  onDestroy: () => void;
} => {
  const [state, setState] = useState({ liked: false, count: 0 });
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [cookie] = useCookies(['token']);
  const { data: like = { liked: false, count: 0 }, isSuccess } = useQuery(
    [id, cookie, 'like'],
    () => FetchLikeExists(id, cookie.token),
  );

  useEffect(() => {
    if (isSuccess) {
      setState((prev) => ({ ...prev, ...like }));
    }
  }, [isSuccess, like]);

  const onCreate = async () => {
    try {
      const response = await FetchLikeCreate(id, cookie.token);
      if (response === 201) {
        setState((prev) => ({ ...prev, liked: true, count: prev.count + 1 }));
      }
    } catch (e) {
      history.push(`/product/${id}`, {
        message: 'エラーが発生しました。',
        type: 'error',
      });
    }
  };

  const onDestroy = async () => {
    try {
      const response = await FetchLikeDestroy(id, cookie.token);
      if (response === 201) {
        setState((prevState) => ({
          ...prevState,
          liked: false,
          count: prevState.count - 1,
        }));
      }
    } catch (e) {
      history.push(`/product/${id}`, {
        message: 'エラーが発生しました。',
        type: 'error',
      });
    }
  };

  return { state, onCreate, onDestroy };
};

export default useLikeButton;
