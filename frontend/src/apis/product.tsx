import axios from 'axios';
import { Product, ProductForm } from 'model/index';
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
  product: ProductForm,
): Promise<number | undefined> =>
  axios
    .post(productindexURL, { product })
    .then((results) => results.status)
    .catch((error: undefined) => error);

export default Fetchproductindex;
