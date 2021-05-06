import { FC } from 'react';
import { Header, Icon, Button } from 'semantic-ui-react';

const Textcontainer: FC = () => (
  <div className="ui text container">
    <Header
      content="coffee-oma"
      as="h1"
      style={{ minHeight: '1em', fontSize: '5em' }}
    />
    <h3>コーヒー関するすべてを</h3>
    <Button size="huge" primary>
      coffee-omaを始める
      <Icon name="arrow right" />
    </Button>
  </div>
);

export default Textcontainer;
