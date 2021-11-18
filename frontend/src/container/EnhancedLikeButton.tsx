import { FC } from 'react';
import useLikeButton from 'hooks/LikeButton';
import LikeButton from 'components/atoms/LikeButton';

const EnhancedLikedButton: FC = () => {
  const { like, onCreate, onDestroy } = useLikeButton();

  return <LikeButton {...{ like, onCreate, onDestroy }} />;
};

export default EnhancedLikedButton;
