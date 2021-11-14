import { FC, Suspense } from 'react';
import { Divider, Header, Icon, Loader } from 'semantic-ui-react';
import ReviewItems from 'container/EnhancedReviewItems';
import ErrorBoundary from 'error/ErrorBoundary';

const ReviewArea: FC = () => (
  <>
    <Divider horizontal>
      <Header as="h4">
        <Icon name="pencil alternate" />
        ユーザーレビュー
      </Header>
    </Divider>
    <ErrorBoundary statusMessages={{ 404: 'エラーが発生しました。' }}>
      <Suspense fallback={<Loader active />}>
        <ReviewItems />
      </Suspense>
    </ErrorBoundary>
  </>
);

export default ReviewArea;
