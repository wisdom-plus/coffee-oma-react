import { FC } from 'react';
import ThreeCards from 'components/molecules/ThreeCards';
import useThreeCards from 'hooks/ThreeCards';

const EnhancedThreeCards: FC = () => {
  const { products, fetchNext } = useThreeCards();

  return <ThreeCards {...{ products, fetchNext }} />;
};

export default EnhancedThreeCards;
