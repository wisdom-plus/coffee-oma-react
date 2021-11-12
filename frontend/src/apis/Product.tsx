import axios from 'axios';
import { Product } from 'model/index';
import { productindexURL, productshowURL, LikeIndexURL } from 'urls/index';

export const Fetchproductindex = async (): Promise<{ products: Product[] }> => {
  try {
    const response = await axios.get<{ products: Product[] }>(productindexURL);

    return response.data;
  } catch (error) {
    throw new Error();
  }
};

export const Fetchproductshow = async (
  productId: string,
): Promise<{ product: Product }> => {
  if (!productId) {
    throw new Error('エラー');
  }
  const response = await axios.get<{ product: Product }>(
    productshowURL(productId),
  );

  return response.data;
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
