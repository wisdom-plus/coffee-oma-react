import { FC, Suspense } from 'react';
import { Header } from 'semantic-ui-react';
import RankingCards from 'container/fetch/EnhancedRankingCards';
import ErrorBoundary from 'error/ErrorBoundary';
import ThreeCardsLoading from 'error/ThreeCardsLoading';

const ProductRank: FC = () => (
  <>
    <Header
      as="h1"
      content="ランキング"
      textAlign="center"
      stryle={{ marginBottom: '3rem' }}
    />
    <Header as="h3" textAlign="center" stryle={{ marginBottom: '3rem' }}>
      アイテムのお気に入り数でランキングを表示しています。
    </Header>
    <ErrorBoundary statusMessages={{ 404: 'アイテムが読み込めませんでした。' }}>
      <Suspense fallback={<ThreeCardsLoading />}>
        <RankingCards />
      </Suspense>
    </ErrorBoundary>
  </>
);
export default ProductRank;
