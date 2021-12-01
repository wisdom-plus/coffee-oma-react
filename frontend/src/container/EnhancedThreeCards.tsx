import { FC, useRef } from 'react';
import ThreeCards from 'components/molecules/ThreeCards';
import useThreeCards from 'hooks/ThreeCards';

const EnhancedThreeCards: FC = () => {
  const { products, fetchNext, isFetch } = useThreeCards();
  const Railref = useRef<HTMLElement>(null);

  return <ThreeCards {...{ products, fetchNext, isFetch, Railref }} />;
};

export default EnhancedThreeCards;
