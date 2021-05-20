import { FC } from 'react';
import { Header } from 'semantic-ui-react';
import ShowTop from 'components/organisms/ShowTop';

const Productshow: FC = () => (
  <>
    <Header
      as="h1"
      content="アイテム詳細"
      textAlign="center"
      style={{ marginBottom: '1rem' }}
    />
    <ShowTop />
  </>
);

export default Productshow;
