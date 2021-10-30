import { FC } from 'react';
import Hometoptitles from 'components/organisms/Hometoptitles';
import Homeicongrid from 'components/organisms/Homeicongrid';
import Homeranking from 'components/organisms/HomeRanking';

const Hometop: FC = () => (
  <>
    <Hometoptitles />
    <Homeicongrid />
    <Homeranking />
  </>
);

export default Hometop;
