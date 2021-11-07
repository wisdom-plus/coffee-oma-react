import { FC } from 'react';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';
import HomeRankThreeCards from 'container/EnhancedHomeRankThreeCards';

const Rankinggrid = styled.div`
  margin: 3rem 0 !important;
`;

const HomeRanking: FC = () => (
  <Rankinggrid className="ui vertical stripe center aligned segment grid">
    <Header as="h2" content="お気に入りアイテムランキング" />
    <HomeRankThreeCards />
  </Rankinggrid>
);

export default HomeRanking;
