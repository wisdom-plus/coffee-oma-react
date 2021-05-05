import { FC } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Threecards } from 'components/molecules/Threecards';

const Productindex: FC = () => (
  <>
    <Header
      as="h1"
      content="アイテムの一覧"
      textAlign="center"
      stryle={{ marginBottom: '3rem' }}
    />
    <Header as="h3" textAlign="center">
      なければ
      <Link to="/product/new">こちらから登録</Link>
    </Header>
    <Threecards isindex />
  </>
);
export default Productindex;
