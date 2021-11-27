import axios from 'axios';
import { FollowURL, FollowDestroyURL, FollowExistsURL } from 'urls/index';
import { Token, Follow } from 'model/index';

export const FetchFollow = async (
  FollowId: string,
  headers: Token,
): Promise<number> => {
  try {
    const response = await axios.post(
      FollowURL,
      {
        relationships: { follow_id: FollowId },
      },
      { headers },
    );

    return response.status;
  } catch (e) {
    throw new Error();
  }
};

export const FetchFollowed = async (
  FollowId: string,
  headers: Token,
): Promise<number> => {
  try {
    const response = await axios.delete(FollowDestroyURL(FollowId), {
      headers,
    });

    return response.status;
  } catch (e) {
    throw new Error();
  }
};

export const FetchFollowExists = async (
  FollowId: string,
  headers: Token,
): Promise<Follow> => {
  if (!FollowId && !headers) {
    throw new Error('APIエラー');
  }
  const response = await axios.get<Follow>(FollowExistsURL, {
    params: { follow_id: FollowId },
    headers,
  });

  return response.data;
};

export default FetchFollow;
