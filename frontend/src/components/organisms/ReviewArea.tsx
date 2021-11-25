import { FC, Suspense } from 'react';
import { Divider, Header, Icon, Grid, Segment } from 'semantic-ui-react';
import ReviewItems from 'container/EnhancedReviewItems';
import ErrorBoundary from 'error/ErrorBoundary';
import ErrorReviewLoader from 'error/ErrorReviewLoader';
import ReviewForm from 'container/EnhancedReviewForm';
import { CurrentUser } from 'model/index';

const ReviewArea: FC<{ user: CurrentUser; exists: boolean }> = ({
  user,
  exists,
}) => (
  <>
    <Divider horizontal>
      <Header as="h4">
        <Icon name="pencil alternate" />
        ユーザーレビュー
      </Header>
    </Divider>
    {exists ? (
      <ErrorBoundary
        statusMessages={{ 404: 'レビューが取得できませんでした。' }}
      >
        <Suspense fallback={<ErrorReviewLoader />}>
          <ReviewItems />
        </Suspense>
      </ErrorBoundary>
    ) : (
      <Grid centered textAlign="center" padded verticalAlign="middle">
        <Grid.Column>
          <Grid columns={3} centered style={{ margin: '4em' }}>
            <Grid.Column width={3} />
            <Grid.Column width={10} as={Segment}>
              <Header as="h4" textAlign="center" data-testid="errormessage">
                レビューがまだありません。
              </Header>
            </Grid.Column>
            <Grid.Column width={3} />
          </Grid>
        </Grid.Column>
      </Grid>
    )}
    <Divider section />
    {user.name && <ReviewForm />}
  </>
);

export default ReviewArea;
