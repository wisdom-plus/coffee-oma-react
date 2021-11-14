import { FC, Suspense } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ThreeCards from 'container/EnhancedThreeCards';
import ErrorBoundary from 'error/ErrorBoundary';
import ThreeCardsLoading from 'error/ThreeCardsLoading';

const ProductIndex: FC = () => (
  <>
    <Header
      as="h1"
      content="アイテムの一覧"
      textAlign="center"
      stryle={{ marginBottom: '3rem' }}
    />
    <Header as="h3" textAlign="center">
      なければ
      <Link to="/product/new">こちらから登録</Link>
    </Header>
    <ErrorBoundary statusMessages={{ 404: 'アイテムが存在しません。' }}>
      <Suspense fallback={<ThreeCardsLoading />}>
        <ThreeCards />
      </Suspense>
    </ErrorBoundary>
  </>
);
export default ProductIndex;
