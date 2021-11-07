import { FC } from 'react';
import HomeTopTitle from 'components/organisms/HomeTopTitle';
import HomeIconGrid from 'components/organisms/HomeIconGrid';
import HomeRanking from 'components/organisms/HomeRanking';

const Hometop: FC = () => (
  <>
    <HomeTopTitle />
    <HomeIconGrid />
    <HomeRanking />
  </>
);

export default Hometop;
