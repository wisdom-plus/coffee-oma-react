import axios from 'axios';
import { Review, ReviewFormData, Token } from 'model/index';
import { ReviewExistsURL, ReviewCreateURL } from 'urls/index';

export const FetchReviewExists = async (
  ProductId: string,
): Promise<Review[]> => {
  if (!ProductId) {
    throw new Error('IDエラー');
  }
  const response = await axios.get<{ reviews: Review[] }>(
    ReviewExistsURL(ProductId),
  );

  return response.data.reviews;
};

export const FetchReviewCreate = async (
  formdata: ReviewFormData,
  headers: Token,
  ProductId: string,
): Promise<number> => {
  try {
    const response = await axios.post(ReviewCreateURL(ProductId), formdata, {
      headers,
    });

    return response.status;
  } catch (e) {
    throw new Error('error');
  }
};

export default FetchReviewExists;
