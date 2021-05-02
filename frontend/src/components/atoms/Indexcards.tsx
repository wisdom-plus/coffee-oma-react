import { FC } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Product } from 'reducers/Product';

type Price = {
  price: number;
};

const extra: FC<Price> = ({ price }) => <Icon name="yen sign">{price}</Icon>;

const Indexcards: FC<{ products: Product[] }> = ({ products }) => (
  <>
    {products.map((product) => (
      <Link key={product.id} to={`/product/${product.id}`}>
        <Card
          image={product.image}
          header={product.name}
          meta={product.shopname}
          extra={extra}
        />
      </Link>
    ))}
  </>
);

export default Indexcards;
