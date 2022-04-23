import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { FollowURL, FollowDestroyURL, FollowExistsURL } from 'urls/index';
import { FetchFollow, FetchFollowed, FetchFollowExists } from 'apis/Follow';

describe('User', () => {
  const mock = new MockAdapter(axios);

  afterEach(() => {
    mock.reset();
  });
  //  cookieの変更
  describe('follow', () => {
    // it('should succeed', async () => {
    //   const followId = 2;
    //   const follow = await FetchFollow(`${followId}`);
    //   expect(follow).toBe(201);
    // });
  });
  describe('followed', () => {
    // it('should succeed', async () => {
    //   const followId = 2;
    //   const followed = await FetchFollowed(`${followId}`);
    //   expect(followed).toBe(200);
    // });
  });
  describe('exists', () => {
    // it('should succeed', async () => {
    //   const followId = 2;
    //   const follow = await FetchFollowExists(`${followId}`);
    //   expect(follow).toBe(200);
    // });
  });
});
