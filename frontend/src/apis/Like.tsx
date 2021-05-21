import { SignedInAxios } from 'apis/Session';
import { LikedData } from 'model/index';
import { LikeCreateURL, LikeDestroyURL, LikeExistsURL } from '../urls/index';

export const FetchLikeCreate = (
  ProductId: string,
): Promise<{ id: number } | 500> =>
  SignedInAxios.post<{ id: number } | 500>(LikeCreateURL, {
    like: { product_id: ProductId },
  })
    .then<{ id: number } | 500>((result) =>
      result.status === 201 ? result.data : 500,
    )
    .catch(() => 500);

export const FetchLikeDestroy = (LikeId: string): Promise<number | 500> =>
  SignedInAxios.delete(LikeDestroyURL(LikeId))
    .then((result) => result.status)
    .catch(() => 500);

export const FetchLikeExists = (ProductId: string): Promise<LikedData | 0> =>
  SignedInAxios.get<{ count: number }>(LikeExistsURL, {
    params: { product_id: ProductId },
  })
    .then<LikedData | 0>((result) => ({
      status: result.status,
      data: result.data,
    }))
    .catch(() => 0);

export default FetchLikeCreate;
