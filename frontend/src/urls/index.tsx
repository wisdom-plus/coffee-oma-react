const DEFAULT_API_LOCALHOST = 'http://localhost:3001/api';

export const productindexURL = `${DEFAULT_API_LOCALHOST}/products`;
export const productshowURL = (productId: string): string =>
  `${DEFAULT_API_LOCALHOST}/products/${productId}`;
export const registrationnewURL = `${DEFAULT_API_LOCALHOST}/auth`;
export const sessionnewURL = `${DEFAULT_API_LOCALHOST}/auth/sign_in`;
export const sessiondestroyURL = `${DEFAULT_API_LOCALHOST}/auth/sign_out`;

export default productindexURL;
