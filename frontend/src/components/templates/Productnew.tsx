import { FC } from 'react';
import { Header } from 'semantic-ui-react';
import Newform from 'components/organisms/Newform';

const ProductNew: FC = () => (
  <>
    <Header
      as="h1"
      content="アイテムを登録する"
      textAlign="center"
      style={{ marginBottom: '1rem' }}
    />
    <Newform />
  </>
);

export default ProductNew;
