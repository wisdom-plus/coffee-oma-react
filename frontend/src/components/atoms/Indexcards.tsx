import { FC } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Product } from 'reducers/Product';

type Price = {
  price: number;
};

const Extra: FC<Price> = ({ price = 100 }) => (
  <Icon name="yen sign">{price}</Icon>
);

const Indexcards: FC<{ products: Product[] }> = ({ products }) => (
  <>
    {products.map((product) => (
      <Link
        key={product.id}
        to={`/product/${product.id}`}
        style={{ margin: '0.875em 1em' }}
      >
        <Card>
          <Image src={product.image} />
          <Card.Content>
            <Card.Header>{product.name}</Card.Header>
            <Card.Meta>
              <span>Brand: {product.shopname}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Extra price={product.price} />
          </Card.Content>
        </Card>
      </Link>
    ))}
  </>
);

export default Indexcards;
