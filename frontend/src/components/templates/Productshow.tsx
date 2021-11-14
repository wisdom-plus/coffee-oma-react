import { FC } from 'react';
import { Header } from 'semantic-ui-react';
import ShowTop from 'components/organisms/ShowTop';
import { Product } from 'model/index';
import ReviewArea from 'components/organisms/ReviewArea';

const ProductShow: FC<{ product: Product }> = ({ product }) => (
  <>
    <Header
      as="h1"
      content="アイテム詳細"
      textAlign="center"
      style={{ marginBottom: '1rem' }}
    />
    <ShowTop product={product} />
    <ReviewArea />
  </>
);
export default ProductShow;
