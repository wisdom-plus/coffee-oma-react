import axios from 'axios';
import { Review } from 'model/index';
import { ReviewExistsURL } from 'urls/index';

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

export default FetchReviewExists;
