import { FC } from 'react';
import ReviewItems from 'components/atoms/ReviewItems';
import useReviewArea from 'hooks/ReviewItems';

const EnhancedReviewItems: FC = () => {
  const reviews = useReviewArea();

  return <ReviewItems reviews={reviews} />;
};

export default EnhancedReviewItems;
