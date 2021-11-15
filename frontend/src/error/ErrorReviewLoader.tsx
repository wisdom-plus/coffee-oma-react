import { FC } from 'react';
import { Loader, Segment } from 'semantic-ui-react';

const ErrorReviewLoader: FC = () => (
  <Segment style={{ display: 'inline-block', padding: '5em' }}>
    <Loader active size="big" />
  </Segment>
);

export default ErrorReviewLoader;
