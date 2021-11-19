import { FC } from 'react';
import ReviewRemoveButton from 'components/atoms/ReveiwRemoveButton';
import useReviewRemoveButoon from 'hooks/ReviewRemoveButton';

const EnhancedReveiwRemoveButton: FC<{
  ReviewId: number;
}> = ({ ReviewId }) => {
  const { open, setOpen, onDestroy } = useReviewRemoveButoon(ReviewId);

  return <ReviewRemoveButton {...{ open, setOpen, onDestroy, ReviewId }} />;
};

export default EnhancedReveiwRemoveButton;
