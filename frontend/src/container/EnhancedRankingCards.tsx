import { FC, useRef } from 'react';
import RankingCards from 'components/molecules/RankingCards';
import useRankingCards from 'hooks/RankingCards';

const EnhancedRanking: FC = () => {
  const state = useRankingCards();
  const Railref = useRef<HTMLElement>(null);

  return <RankingCards {...{ state, Railref }} />;
};

export default EnhancedRanking;
