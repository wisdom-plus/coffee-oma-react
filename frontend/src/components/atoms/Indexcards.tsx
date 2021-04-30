import { FC } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

type Props = {
  id: number;
  imageurl: string;
  shopname: string;
  itemname: string;
  itemcaptions: string;
  itemprice: number;
};

type Price = {
  price: number;
};

const extra: FC<Price> = ({ price }) => <Icon name="yen sign">{price}</Icon>;

const Indexcards: FC<{ products: Props[] }> = ({ products }) => (
  <>
    {products.map((product) => (
      <Link key={product.id} to={`/product/${product.id}`}>
        <Card
          image={product.imageurl}
          header={product.itemname}
          meta={product.shopname}
          extra={extra}
        />{' '}
      </Link>
    ))}
  </>
);

export default Indexcards;
