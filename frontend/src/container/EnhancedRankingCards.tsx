import { FC } from 'react';
import RankingCards from 'components/molecules/RankingCards';
import useRankingCards from 'hooks/RankingCards';

const EnhancedRanking: FC = () => {
  const state = useRankingCards();

  return <RankingCards state={state} />;
};

export default EnhancedRanking;
