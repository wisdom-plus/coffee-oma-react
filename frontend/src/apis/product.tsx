import axios from 'axios';
import { Product } from 'reducers/Product';
import { productindexURL } from '../urls/index';

const Fetchproductindex = (): Promise<Product[] | Error> =>
  axios
    .get<Product[]>(productindexURL)
    .then<Product[]>((results) => results.data)
    .catch<Error>((error: Error) => error);

export default Fetchproductindex;
