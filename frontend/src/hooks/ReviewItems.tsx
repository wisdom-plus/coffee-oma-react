import { FetchReviewExists } from 'apis/Review';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Review } from 'model/index';

const useReviewArea = (): Review[] => {
  const { id } = useParams<{ id: string }>();
  const { data: reviews = [] } = useQuery([id, 'review'], () =>
    FetchReviewExists(id),
  );

  return reviews;
};

export default useReviewArea;
