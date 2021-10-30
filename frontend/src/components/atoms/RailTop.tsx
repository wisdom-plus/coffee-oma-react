import { FC } from 'react';
import { Rail, Sticky, Button } from 'semantic-ui-react';

const returntop = () => window.scrollTo(0, 0);

const RailTop: FC = () => (
  <Rail position="right">
    <Sticky>
      <Button
        content="Top"
        icon="arrow up"
        labelPosition="left"
        color="teal"
        OnClick={returntop}
      />
    </Sticky>
  </Rail>
);

export default RailTop;
