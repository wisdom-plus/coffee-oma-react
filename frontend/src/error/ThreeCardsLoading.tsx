import { FC } from 'react';
import { Segment, Loader } from 'semantic-ui-react';

const ThreeCardsLoading: FC = () => (
  <Segment style={{ marginTop: '4em', padding: '25em' }}>
    <Loader active size="big" data-testid="loader" />
  </Segment>
);

export default ThreeCardsLoading;
