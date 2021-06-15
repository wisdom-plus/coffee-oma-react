import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { FetchLikeIndex } from 'apis/Product';
import { SignedInAxios } from 'apis/Session';
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
  const Signedmock = new MockAdapter(SignedInAxios);

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
    it('should succeed', async () => {
      const productId = 1;
      localStorage.setItem('access-token', 'access-token');
      localStorage.setItem('client', 'client');
      localStorage.setItem('uid', 'uid');
      Signedmock.onPost(LikeCreateURL).reply(201);
      const likecreate = await FetchLikeCreate(`${productId}`);
      expect(likecreate).toBe(201);
    });
  });
  describe('Destroy', () => {
    it('should', async () => {
      const likeId = 1;
      localStorage.setItem('access-token', 'access-token');
      localStorage.setItem('client', 'client');
      localStorage.setItem('uid', 'uid');
      Signedmock.onDelete(LikeDestroyURL(`${likeId}`)).reply(201);
      const likedestroy = await FetchLikeDestroy(`${likeId}`);
      expect(likedestroy).toBe(201);
    });
  });
  describe('Exists', () => {
    it('should', async () => {
      const productId = 1;
      const likecount = 10;
      localStorage.setItem('access-token', 'access-token');
      localStorage.setItem('client', 'client');
      localStorage.setItem('uid', 'uid');
      Signedmock.onGet(LikeExistsURL).reply(201, {
        count: likecount,
        liked: true,
      });
      const likeexists = await FetchLikeExists(`${productId}`);
      expect(likeexists).toStrictEqual({ count: 10, liked: true });
    });
  });
});
