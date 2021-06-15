import { FC } from 'react';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';
import RankThreeCards from 'components/molecules/RankThreeCards';

const Rankinggrid = styled.div`
  margin: 3rem 0 !important;
`;

const Homeranking: FC = () => (
  <Rankinggrid className="ui vertical stripe center aligned segment grid">
    <Header as="h2" content="お気に入りアイテムランキング" />
    <RankThreeCards />
  </Rankinggrid>
);

export default Homeranking;
