const DEFAULT_API_LOCALHOST = 'http://localhost:3001/api';

export const productindexURL = `${DEFAULT_API_LOCALHOST}/products`;
export const productshowURL = (productId: number): string =>
  `${DEFAULT_API_LOCALHOST}/product/${productId}`;

export default productindexURL;
