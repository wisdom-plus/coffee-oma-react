import { FC } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import IndexCards from 'components/atoms/IndexCards';
import { Product } from 'model/index';

const RankingCards: FC<{ state: Product[] }> = ({ state = [] }) => (
  <>
    <Segment>
      <Card.Group itemsPerRow={3} stackable centered>
        <IndexCards products={state} isrank />
      </Card.Group>
    </Segment>
  </>
);

export default RankingCards;
