import { SignedInAxios } from 'apis/Session';
import { LikeCreateURL, LikeDestroyURL, LikeExistsURL } from '../urls/index';

export const FetchLikeCreate = (ProductId: string): Promise<number> =>
  SignedInAxios.post(LikeCreateURL, { like: { product_id: ProductId } })
    .then((result) => result.status)
    .catch(() => 401);

export const FetchLikeDestroy = (LikeId: number): Promise<number> =>
  SignedInAxios.delete(LikeDestroyURL(LikeId))
    .then((result) => result.status)
    .catch(() => 401);

export const FetchLikeExists = (ProductId: string): Promise<number> =>
  SignedInAxios.get<number>(LikeExistsURL, {
    params: { product_id: ProductId },
  })
    .then<number>((result) => (result.status === 200 ? result.data : 0))
    .catch(() => 401);

export default FetchLikeCreate;
