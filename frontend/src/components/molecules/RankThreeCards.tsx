import { FC, useEffect, useState } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import Ranking from 'components/atoms/Ranking';
import { Link } from 'react-router-dom';
import { Fetchproductindex } from 'apis/Product';
import { Product } from 'model/index';

const RankThreeCards: FC = () => {
  const [state, setState] = useState<Product[]>([]);

  useEffect(() => {
    Fetchproductindex()
      .then((result) =>
        result !== undefined && result.products
          ? setState(result.products)
          : [],
      )
      .catch(() => setState([]));
  }, []);

  return (
    <Card.Group
      itemsPerRow={3}
      stackable
      centered
      style={{ paddingTop: '3em' }}
    >
      <Ranking rankings={state} />
      <Link to="/product/ranking">
        <Button color="teal" size="huge" style={{ marginTop: '2em' }}>
          <Icon name="signal" />
          ランキングを詳しく見る
        </Button>
      </Link>
    </Card.Group>
  );
};

export default RankThreeCards;
