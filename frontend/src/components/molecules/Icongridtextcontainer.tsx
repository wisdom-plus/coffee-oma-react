import { FC } from 'react';
import { Header } from 'semantic-ui-react';

const Icongridtextcontainer: FC = () => (
  <div className="ui text container">
    <Header content="coffee-omaとは" as="h1" style={{ fontSize: '3rem' }} />
    <p>コーヒーに関するすべてのアイテムの口コミ共有サービスです。</p>
  </div>
);

export default Icongridtextcontainer;
