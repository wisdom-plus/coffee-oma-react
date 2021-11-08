import axios from 'axios';
import { Product } from 'model/index';
import { productindexURL, productshowURL, LikeIndexURL } from 'urls/index';

export const Fetchproductindex = (): Promise<
  { products: Product[] } | undefined
> =>
  axios
    .get<{ products: Product[] }>(productindexURL)
    .then((result) => {
      if (result.status !== 200) {
        return undefined;
      }

      return result.data;
    })
    .catch((error: undefined) => error);

export const Fetchproductshow = (
  productId: string,
): Promise<{ product: Product } | undefined> =>
  axios
    .get<{ product: Product }>(productshowURL(productId))
    .then((result) => {
      if (result.status !== 200) {
        return undefined;
      }

      return result.data;
    })
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

export const FetchLikeIndex = async (): Promise<{ likes: Product[] }> => {
  try {
    const response = await axios.get<{ likes: Product[] }>(LikeIndexURL);

    return response.data;
  } catch (error) {
    throw new Error();
  }
};

export default Fetchproductindex;
