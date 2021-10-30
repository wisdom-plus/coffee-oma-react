import { FC } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import IndexCards from 'components/atoms/IndexCards';
import useRanking from 'hooks/Ranking';

export const RankingCards: FC = () => {
  const state = useRanking();

  return (
    <>
      <Segment>
        <Card.Group itemsPerRow={3} stackable centered>
          <IndexCards products={state} isrank />
        </Card.Group>
      </Segment>
    </>
  );
};

export default RankingCards;
