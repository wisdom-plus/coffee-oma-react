import { SignedInAxios } from 'apis/Session';
import { LikedData } from 'model/index';
import { LikeCreateURL, LikeDestroyURL, LikeExistsURL } from 'urls/index';

export const FetchLikeCreate = (ProductId: string): Promise<number> =>
  SignedInAxios.post<number>(LikeCreateURL, {
    like: { product_id: ProductId },
  })
    .then<number>((result) => result.status)
    .catch(() => 500);

export const FetchLikeDestroy = (LikeId: string): Promise<number | 500> =>
  SignedInAxios.delete(LikeDestroyURL(LikeId))
    .then((result) => result.status)
    .catch(() => 500);

export const FetchLikeExists = (ProductId: string): Promise<LikedData | 0> =>
  SignedInAxios.get<LikedData>(LikeExistsURL, {
    params: { product_id: ProductId },
  })
    .then<LikedData | 0>((result) => result.data)
    .catch(() => 0);

export default FetchLikeCreate;
