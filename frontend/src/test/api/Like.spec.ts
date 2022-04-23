import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { FetchLikeIndex } from 'apis/Product';
import { FetchLikeCreate, FetchLikeDestroy, FetchLikeExists } from 'apis/Like';
import {
  LikeIndexURL,
  LikeCreateURL,
  LikeDestroyURL,
  LikeExistsURL,
} from 'urls/index';
import { products } from 'mock/product';

describe('Like', () => {
  const mock = new MockAdapter(axios);

  afterEach(() => {
    mock.reset();
  });

  describe('Index', () => {
    it('should succeed', async () => {
      mock.onGet(LikeIndexURL).reply(200, { likes: products });
      const productindex = await FetchLikeIndex();
      expect(productindex).toEqual({ likes: products });
    });
  });
  describe('Create', () => {
    // cookieの変更
    // it('should succeed', async () => {
    //   const productId = 1;
    //   localStorage.setItem('access-token', 'access-token');
    //   localStorage.setItem('client', 'client');
    //   localStorage.setItem('uid', 'uid');
    //   const likecreate = await FetchLikeCreate(`${productId}`);
    //   expect(likecreate).toBe(201);
    // });
  });
  describe('Destroy', () => {
    // cookieの変更
    // it('should', async () => {
    //   const likeId = 1;
    //   localStorage.setItem('access-token', 'access-token');
    //   localStorage.setItem('client', 'client');
    //   localStorage.setItem('uid', 'uid');
    //   const likedestroy = await FetchLikeDestroy(`${likeId}`);
    //   expect(likedestroy).toBe(201);
    // });
  });
  describe('Exists', () => {
    // cookieの変更
    // it('should', async () => {
    //   const productId = 1;
    //   const likecount = 10;
    //   localStorage.setItem('access-token', 'access-token');
    //   localStorage.setItem('client', 'client');
    //   localStorage.setItem('uid', 'uid');
    //   const likeexists = await FetchLikeExists(`${productId}`);
    //   expect(likeexists).toStrictEqual({ count: 10, liked: true });
    // });
  });
});
