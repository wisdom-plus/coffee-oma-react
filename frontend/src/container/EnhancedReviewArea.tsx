import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import LoginState from 'Atom';
import ReviewArea from 'components/organisms/ReviewArea';

const EnhancedReviewArea: FC = () => {
  const user = useRecoilValue(LoginState);

  return <ReviewArea user={user} />;
};

export default EnhancedReviewArea;
