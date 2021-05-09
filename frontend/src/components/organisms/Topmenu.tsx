import { FC } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import Menulogo from 'components/atoms/Menulogo';
import { Link } from 'react-router-dom';

const Topmenu: FC = () => (
  <Menu fixed="top" inverted color="teal">
    <Container>
      <Menulogo />
      <Menu.Item
        header
        as={Link}
        to="/sign_up"
        content="新規登録"
        position="right"
      />
    </Container>
  </Menu>
);

export default Topmenu;
