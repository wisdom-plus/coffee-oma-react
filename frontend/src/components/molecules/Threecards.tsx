import { FC } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import Indexcards from 'components/atoms/Indexcards';
import useProductIndex from 'hooks/ProductIndex';

type Props = {
  className?: string;
};

export const Threecards: FC<Props> = ({ className }) => {
  const state = useProductIndex();

  return (
    <>
      <Segment style={{ margin: '4em', padding: '3em' }}>
        <Card.Group itemsPerRow={3} stackable className={className} centered>
          <Indexcards products={state} />
        </Card.Group>
      </Segment>
    </>
  );
};

export default Threecards;
