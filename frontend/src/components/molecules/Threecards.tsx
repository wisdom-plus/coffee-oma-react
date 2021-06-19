import { FC, useEffect, useState } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import Indexcards from 'components/atoms/Indexcards';
import { Fetchproductindex } from 'apis/Product';
import { Product } from 'model/index';
import { useHistory } from 'react-router-dom';

type Props = {
  className?: string;
};

export const Threecards: FC<Props> = ({ className }) => {
  const [state, setState] = useState<Product[]>([]);
  const history = useHistory();

  useEffect(() => {
    Fetchproductindex()
      .then((result) =>
        result !== undefined && result.products !== undefined
          ? setState(() => result.products)
          : history.push('/products', {
              message: 'エラーが発生しました。',
              type: 'error',
            }),
      )
      .catch(() =>
        history.push('/products', {
          message: 'エラーが発生しました。',
          type: 'error',
        }),
      );
  }, [history]);

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
