import { FC } from 'react';
import ReviewArea from 'components/organisms/ReviewArea';
import useReviewArea from 'hooks/ReviewArea';

const EnhancedReviewArea: FC = () => {
  const reviews = useReviewArea();

  return <ReviewArea reviews={reviews} />;
};

export default EnhancedReviewArea;
