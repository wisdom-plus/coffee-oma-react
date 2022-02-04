import { FC } from 'react';
import useHomeRanking from 'hooks/fetch/HomeRankiThreeCards';
import RankThreeCards from 'components/molecules/HomeRankThreeCards';

const EnhancedRankThreeCards: FC = () => {
  const state = useHomeRanking();

  return <RankThreeCards state={state} />;
};

export default EnhancedRankThreeCards;
