import { FC } from 'react';
import { Card, Icon, Image, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Product } from 'model/index';

type Props = {
  products: Product[];
  isrank?: boolean;
};

const Extra: FC<{ price: number }> = ({ price }) => (
  <Icon name="yen sign">{price.toLocaleString()}</Icon>
);

const Indexcards: FC<Props> = ({ products, isrank = false }) => (
  <>
    {products.map((product, index) => (
      <Link
        key={product.id}
        to={`/product/${product.id}`}
        style={{ margin: '0.875em 1em' }}
      >
        <Card>
          {isrank && (
            <Label color="teal" attached="top left" size="small">
              <Icon name="chess queen" style={{ fontSize: '1.3em' }} />
              {index + 1}
            </Label>
          )}
          <Image src={product.image.url} />
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
