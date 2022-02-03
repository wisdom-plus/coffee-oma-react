import { FC } from 'react';
import ReviewForm from 'components/molecules/ReviewForm';
import useReviewForm from 'hooks/form/ReviewForm';
/* eslint-disable react/jsx-props-no-spreading */

const EnhancedReviewForm: FC = () => {
  const methods = useReviewForm();

  return <ReviewForm {...methods} />;
};

export default EnhancedReviewForm;
