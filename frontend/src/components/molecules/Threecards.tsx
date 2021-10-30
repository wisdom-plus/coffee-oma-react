import { FC } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import IndexCards from 'components/atoms/IndexCards';
import useProductIndex from 'hooks/ProductIndex';

type Props = {
  className?: string;
};

const ThreeCards: FC<Props> = ({ className }) => {
  const state = useProductIndex();

  return (
    <>
      <Segment style={{ margin: '4em', padding: '3em' }}>
        <Card.Group itemsPerRow={3} stackable className={className} centered>
          <IndexCards products={state} />
        </Card.Group>
      </Segment>
    </>
  );
};

export default ThreeCards;
