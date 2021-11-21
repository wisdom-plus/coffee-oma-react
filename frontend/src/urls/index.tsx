const DEFAULT_API_LOCALHOST =
  process.env.REACT_APP_API_URL || 'http://localhost:3001/api/v1';

export const productindexURL = `${DEFAULT_API_LOCALHOST}/products`;
export const productshowURL = (productId: string): string =>
  `${DEFAULT_API_LOCALHOST}/products/${productId}`;
export const RegistrationNewURL = `${DEFAULT_API_LOCALHOST}/auth`;
export const RegistrationShowURL = (UserId: string): string =>
  `${DEFAULT_API_LOCALHOST}/auth/registrations/${UserId}`;
export const sessionnewURL = `${DEFAULT_API_LOCALHOST}/auth/sign_in`;
export const sessiondestroyURL = `${DEFAULT_API_LOCALHOST}/auth/sign_out`;
export const sessionvalidateURL = `${DEFAULT_API_LOCALHOST}/auth/validate_token`;
export const sessionconfirmationURL = `${DEFAULT_API_LOCALHOST}/auth/confirmation`;
export const passwordresetURL = `${DEFAULT_API_LOCALHOST}/auth/password`;
export const passwordreseteditURL = `${DEFAULT_API_LOCALHOST}/auth/password`;
export const LikeCreateURL = `${DEFAULT_API_LOCALHOST}/likes`;
export const LikeDestroyURL = (ProductId: string): string =>
  `${DEFAULT_API_LOCALHOST}/likes/${ProductId}`;
export const LikeExistsURL = `${DEFAULT_API_LOCALHOST}/likes/exists`;
export const LikeIndexURL = `${DEFAULT_API_LOCALHOST}/likes`;
export const FollowURL = `${DEFAULT_API_LOCALHOST}/relationships`;
export const FollowDestroyURL = (UserId: string): string =>
  `${DEFAULT_API_LOCALHOST}/relationships/${UserId}`;
export const FollowExistsURL = `${DEFAULT_API_LOCALHOST}/relationships/exists`;
export const ReviewExistsURL = (ProductId: string): string =>
  `${DEFAULT_API_LOCALHOST}/products/${ProductId}/reviews/exists`;
export const ReviewCreateURL = (ProductId: string): string =>
  `${DEFAULT_API_LOCALHOST}/products/${ProductId}/reviews`;
export const ReviewDestroyURL = (ProductId: string, ReviewId: string): string =>
  `${DEFAULT_API_LOCALHOST}/products/${ProductId}/reviews/${ReviewId}`;

export default productindexURL;
