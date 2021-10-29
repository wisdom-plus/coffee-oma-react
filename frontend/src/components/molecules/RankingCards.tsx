import { FC } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import Indexcards from 'components/atoms/Indexcards';
import useRanking from 'hooks/Ranking';

export const RankingCards: FC = () => {
  const state = useRanking();

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
