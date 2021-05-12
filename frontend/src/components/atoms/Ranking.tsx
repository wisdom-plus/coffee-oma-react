import { FC } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

type Rank = {
  id: number;
  imageurl: string;
  itemname: string;
  meta: string;
  shopname: string;
  likescount: number;
};

type Count = {
  count: number;
};

const Extra: FC<Count> = ({ count }) => <Icon name="heart">{count}</Icon>;

const Ranking: FC<{ rankings: Rank[] }> = ({ rankings }) => (
  <>
    {rankings.map((rank) => (
      <Link to={`/product/${rank.id}`} key={rank.id}>
        <Card>
          <Image src={rank.imageurl} />
          <Card.Content>
            <Card.Header>{rank.itemname}</Card.Header>
            <Card.Meta>{rank.shopname}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Extra count={rank.likescount} />
          </Card.Content>
        </Card>
      </Link>
    ))}
  </>
);

export default Ranking;
