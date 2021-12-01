import { FC, RefObject } from 'react';
import { Rail, Sticky, Button } from 'semantic-ui-react';

const returntop = () => window.scrollTo(0, 0);

const RailTop: FC<{ Railref: RefObject<HTMLElement> }> = ({ Railref }) => (
  <Rail position="right" size="large">
    <Sticky pushing context={Railref} offset={100}>
      <Button
        content="Top"
        icon="arrow up"
        labelPosition="left"
        color="teal"
        onClick={returntop}
        size="large"
      />
    </Sticky>
  </Rail>
);

export default RailTop;
