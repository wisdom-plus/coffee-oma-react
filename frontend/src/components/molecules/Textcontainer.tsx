import { FC } from 'react';
import { Header } from 'semantic-ui-react';
import Primarybutton from 'components/atoms/Primarybutton';

const Textcontainer: FC = () => (
  <div className="ui text container">
    <Header
      content="coffee-oma"
      as="h1"
      style={{ minHeight: '1em', fontSize: '5em' }}
    />
    <h3>コーヒー関するすべてを</h3>
    <Primarybutton />
  </div>
);

export default Textcontainer;
