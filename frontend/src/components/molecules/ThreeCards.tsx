import { FC } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import IndexCards from 'components/atoms/IndexCards';
import { Product } from 'model/index';

const ThreeCards: FC<{ state: Product[] }> = ({ state = [] }) => (
  <Segment style={{ margin: '4em', padding: '3em' }}>
    <Card.Group itemsPerRow={3} stackable centered>
      <IndexCards products={state} />
    </Card.Group>
  </Segment>
);

export default ThreeCards;
