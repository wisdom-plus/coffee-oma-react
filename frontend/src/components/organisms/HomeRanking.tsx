import { FC, Suspense } from 'react';
import { Header, Container } from 'semantic-ui-react';
import styled from 'styled-components';
import HomeRankThreeCards from 'container/EnhancedHomeRankThreeCards';
import ErrorBoundary from 'error/ErrorBoundary';
import HomeThreeCardsLoading from 'error/HomeThreeCardsLoading';

const Rankinggrid = styled.div`
  margin: 3rem 0 !important;
`;

const HomeRanking: FC = () => (
  <Rankinggrid className="ui vertical stripe center aligned segment grid">
    <Container text>
      <Header as="h2" content="お気に入りアイテムランキング" />
    </Container>
    <ErrorBoundary statusMessages={{ 404: 'エラーが発生しました。' }}>
      <Suspense fallback={<HomeThreeCardsLoading />}>
        <HomeRankThreeCards />
      </Suspense>
    </ErrorBoundary>
  </Rankinggrid>
);

export default HomeRanking;
