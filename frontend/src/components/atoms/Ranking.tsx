import { FC } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Product } from 'model/index';

const Ranking: FC<{ rankings: Product[] }> = ({ rankings }) => {
  const toprankings = rankings.filter((rank) => rank.id <= 3);

  return (
    <>
      {toprankings.map((rank) => (
        <Link to={`/product/${rank.id}`} key={rank.id} data-rankid={rank.id}>
          <Card style={{ margin: '0.875em 1em' }}>
            <Image src={rank.image?.url} />
            <Card.Content>
              <Card.Header>{rank.name}</Card.Header>
              <Card.Meta>Brand:{rank.shopname}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Icon name="heart">{rank.likes_count}</Icon>
            </Card.Content>
          </Card>
        </Link>
      ))}
    </>
  );
};
export default Ranking;
