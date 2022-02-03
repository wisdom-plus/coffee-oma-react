import { FC } from 'react';
import ReviewItems from 'components/atoms/ReviewItems';
import useReviewArea from 'hooks/fetch/ReviewItems';
import { useRecoilValue } from 'recoil';
import LoginState from 'atom/LoginState';

const EnhancedReviewItems: FC = () => {
  const reviews = useReviewArea();
  const currentuser = useRecoilValue(LoginState);

  return <ReviewItems reviews={reviews} user={currentuser} />;
};

export default EnhancedReviewItems;
