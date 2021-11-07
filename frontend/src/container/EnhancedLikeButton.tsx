import { FC } from 'react';
import useLikeButton from 'hooks/LikeButton';
import LikeButton from 'components/atoms/LikeButton';

const EnhancedLikedButton: FC = () => {
  const { state, onCreate, onDestroy } = useLikeButton();

  return <LikeButton state={state} onCreate={onCreate} onDestroy={onDestroy} />;
};

export default EnhancedLikedButton;
