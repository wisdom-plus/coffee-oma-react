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

export const Fetchproductshow = async (
  productId: string,
): Promise<{ product: Product }> => {
  try {
    const response = await axios.get<{ product: Product }>(
      productshowURL(productId),
    );

    return response.data;
  } catch (error) {
    throw new Error();
  }
};

export const Fetchproductnew = async (formdata: FormData): Promise<number> => {
  try {
    const response = await axios.post(productindexURL, formdata, {
      headers: { 'content-type': 'multipart/form-data' },
    });

    return response.status;
  } catch (error) {
    throw new Error();
  }
};

export const FetchLikeIndex = async (): Promise<{ likes: Product[] }> => {
  try {
    const response = await axios.get<{ likes: Product[] }>(LikeIndexURL);

    return response.data;
  } catch (error) {
    throw new Error();
  }
};

export default Fetchproductindex;
