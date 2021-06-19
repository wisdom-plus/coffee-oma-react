import { FC, useEffect, useState } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import Indexcards from 'components/atoms/Indexcards';
import { FetchLikeIndex } from 'apis/Product';
import { Product } from 'model/index';

export const RankingCards: FC = () => {
  const [state, setState] = useState<Product[]>([]);
  useEffect(() => {
    FetchLikeIndex()
      .then((result) => (result !== 0 ? setState(result.likes) : []))
      .catch(() => setState([]));
  }, []);

  return (
    <>
      <Segment>
        <Card.Group itemsPerRow={3} stackable centered>
          <Indexcards products={state} isrank />
        </Card.Group>
      </Segment>
    </>
  );
};

export default RankingCards;
