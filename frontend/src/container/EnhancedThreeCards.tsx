import { FC } from 'react';
import ThreeCards from 'components/molecules/ThreeCards';
import useThreeCards from 'hooks/ThreeCards';

const EnhancedThreeCards: FC = () => {
  const { products, fetchNext, isFetch } = useThreeCards();

  return <ThreeCards {...{ products, fetchNext, isFetch }} />;
};

export default EnhancedThreeCards;
