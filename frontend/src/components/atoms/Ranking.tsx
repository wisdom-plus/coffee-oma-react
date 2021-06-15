import { FC } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Product } from 'model/index';

type Count = {
  count: number;
};

const Extra: FC<Count> = ({ count }) => <Icon name="heart">{count}</Icon>;

const Ranking: FC<{ rankings: Product[] }> = ({ rankings }) => (
  <>
    {rankings.splice(0, 3).map((rank) => (
      <Link to={`/product/${rank.id}`} key={rank.id} data-rankid={rank.id}>
        <Card style={{ margin: '0.875em 1em' }}>
          <Image src={rank.image?.url} />
          <Card.Content>
            <Card.Header>{rank.name}</Card.Header>
            <Card.Meta>Brand:{rank.shopname}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Extra count={rank.likes_count} />
          </Card.Content>
        </Card>
      </Link>
    ))}
  </>
);

export default Ranking;
