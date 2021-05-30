import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  Fetchproductindex,
  Fetchproductshow,
  Fetchproductnew,
} from 'apis/Product';
import { productindexURL, productshowURL } from 'urls/index';
import { products } from 'mock/product';

describe('Product', () => {
  const mock = new MockAdapter(axios);

  afterEach(() => {
    mock.reset();
  });

  describe('Index', () => {
    it('should succeed', async () => {
      mock.onGet(productindexURL).reply(200, { products });
      const productindex = await Fetchproductindex();
      expect(productindex).toEqual({ products });
    });
  });
  describe('show', () => {
    it('should succeed', async () => {
      const productId = 1;
      mock
        .onGet(productshowURL(`${productId}`))
        .reply(200, { product: products[productId - 1] });

      const productshow = await Fetchproductshow(`${productId}`);
      expect(productshow).toEqual({ product: products[0] });
    });
  });
  describe('new', () => {
    it('should succeed', async () => {
      mock.onPost(productindexURL).reply(201);
      const formdata = new FormData();
      formdata.append('name', 'コーヒー器具の名前');
      formdata.append('price', '10000');
      formdata.append('shopname', 'ショップの名前');
      formdata.append('url', 'http://www.example.com/1');
      formdata.append('caption', 'アイテムの説明が入ります');
      const productshow = await Fetchproductnew(formdata);
      expect(productshow).toBe(201);
    });
  });
});
