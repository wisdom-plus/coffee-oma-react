import axios from 'axios';
import { Product } from 'reducers/Product';
import { productindexURL } from '../urls/index';

const Fetchproductindex = (): Promise<{ products: Product[] } | undefined> =>
  axios
    .get<{ products: Product[] }>(productindexURL)
    .then<{ products: Product[] }>((results) => results.data)
    .catch((error: undefined) => error);

export default Fetchproductindex;
