import axios from 'axios';
import { LikedData, Token } from 'model/index';
import { LikeCreateURL, LikeDestroyURL, LikeExistsURL } from 'urls/index';

export const FetchLikeCreate = async (
  ProductId: string,
  headers: Token,
): Promise<number> => {
  try {
    const response = await axios.post<number>(
      LikeCreateURL,
      {
        like: { product_id: ProductId },
      },
      { headers },
    );

    return response.status;
  } catch (error) {
    throw new Error();
  }
};

export const FetchLikeDestroy = async (
  LikeId: string,
  headers: Token,
): Promise<number> => {
  try {
    const response = await axios.delete(LikeDestroyURL(LikeId), {
      headers,
    });

    return response.status;
  } catch (error) {
    throw new Error();
  }
};

export const FetchLikeExists = async (
  ProductId: string,
  headers: Token,
): Promise<LikedData> => {
  try {
    const response = await axios.get<LikedData>(LikeExistsURL, {
      params: { product_id: ProductId },
      headers,
    });

    return response.data;
  } catch (error) {
    throw new Error();
  }
};

export default FetchLikeCreate;
