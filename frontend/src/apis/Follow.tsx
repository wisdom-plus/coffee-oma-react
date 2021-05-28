import { SignedInAxios } from 'apis/Session';
import { FollowURL, FollowDestroyURL, FollowExistsURL } from 'urls/index';

export const FetchFollow = (FollowId: string): Promise<number> =>
  SignedInAxios.post(FollowURL, { relationships: { follow_id: FollowId } })
    .then((result) => result.status)
    .catch(() => 0);

export const FetchFollowed = (FollowId: string): Promise<number> =>
  SignedInAxios.delete(FollowDestroyURL(FollowId))
    .then((result) => result.status)
    .catch(() => 0);

export const FetchFollowExists = (FollowId: string): Promise<number> =>
  SignedInAxios.get(FollowExistsURL, {
    params: { follow_id: FollowId },
  })
    .then((result) => result.status)
    .catch(() => 0);
export default FetchFollow;
