import axios from 'axios';
import { Product } from 'model/index';

import { productindexURL, productshowURL } from '../urls/index';

export const Fetchproductindex = (): Promise<
  { products: Product[] } | undefined
> =>
  axios
    .get<{ products: Product[] }>(productindexURL)
    .then<{ products: Product[] }>((results) => results.data)
    .catch((error: undefined) => error);

export const Fetchproductshow = (
  productId: string,
): Promise<{ product: Product } | undefined> =>
  axios
    .get<{ product: Product }>(productshowURL(productId))
    .then<{ product: Product }>((results) => results.data)
    .catch((error: undefined) => error);

export const Fetchproductnew = (
  product: FormData,
): Promise<number | undefined> =>
  axios
    .post(productindexURL, product, {
      headers: { 'content-type': 'multipart/form-data' },
    })
    .then((results) => results.status)
    .catch((error: undefined) => error);

export default Fetchproductindex;
