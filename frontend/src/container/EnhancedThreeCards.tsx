import { FC } from 'react';
import ThreeCards from 'components/molecules/ThreeCards';
import useProductIndex from 'hooks/ThreeCards';

const EnhancedThreeCards: FC = () => {
  const state = useProductIndex();

  return <ThreeCards state={state} />;
};

export default EnhancedThreeCards;
