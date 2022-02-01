import { FetchReviewExists } from 'apis/Review';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Review } from 'model/index';

const useReviewItems = (): Review[] => {
  const { id } = useParams() as { id: string };
  const { data: reviews = [] } = useQuery(
    [id, 'review'],
    () => FetchReviewExists(id),
    { notifyOnChangeProps: 'tracked' },
  );

  return reviews;
};

export default useReviewItems;
