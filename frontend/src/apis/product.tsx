import axios from 'axios';
import { Product } from 'model/index';
import { productindexURL, productshowURL } from '../urls/index';

const Fetchproductindex = (): Promise<{ products: Product[] } | undefined> =>
  axios
    .get<{ products: Product[] }>(productindexURL)
    .then<{ products: Product[] }>((results) => results.data)
    .catch((error: undefined) => error);

export const Fetchproductshow = (
  productId: number,
): Promise<{ products: Product } | undefined> =>
  axios
    .get<{ products: Product }>(productshowURL(productId))
    .then<{ products: Product }>((results) => results.data)
    .catch((error: undefined) => error);

export default Fetchproductindex;
