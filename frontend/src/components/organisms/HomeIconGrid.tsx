import { FC } from 'react';
import { Header, Container } from 'semantic-ui-react';
import ThreeRowFiveColumn from 'components/molecules/ThreeRowFiveColumn';
import styled from 'styled-components';

const Icongrid = styled.div`
  margin: 3rem 0 !important;
`;

const HomeIconGrid: FC = () => (
  <Icongrid className="ui vertical stripe center aligned segment grid">
    <Container text>
      <Header content="coffee-omaとは" as="h1" style={{ fontSize: '3rem' }} />
      <p>コーヒーに関するすべてのアイテムの口コミ共有サービスです。</p>
    </Container>
    <ThreeRowFiveColumn />
  </Icongrid>
);

export default HomeIconGrid;
