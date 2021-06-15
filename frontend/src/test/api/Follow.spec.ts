import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { SignedInAxios } from 'apis/Session';
import { FollowURL, FollowDestroyURL, FollowExistsURL } from 'urls/index';
import { FetchFollow, FetchFollowed, FetchFollowExists } from 'apis/Follow';

describe('User', () => {
  const mock = new MockAdapter(axios);
  const Signedmock = new MockAdapter(SignedInAxios);

  afterEach(() => {
    mock.reset();
  });

  describe('follow', () => {
    it('should succeed', async () => {
      Signedmock.onPost(FollowURL).reply(201);
      const followId = 2;
      const follow = await FetchFollow(`${followId}`);
      expect(follow).toBe(201);
    });
  });
  describe('followed', () => {
    it('should succeed', async () => {
      const followId = 2;
      Signedmock.onDelete(FollowDestroyURL(`${followId}`)).reply(200);
      const followed = await FetchFollowed(`${followId}`);
      expect(followed).toBe(200);
    });
  });
  describe('exists', () => {
    it('should succeed', async () => {
      Signedmock.onGet(FollowExistsURL).reply(200);
      const followId = 2;
      const follow = await FetchFollowExists(`${followId}`);
      expect(follow).toBe(200);
    });
  });
});
