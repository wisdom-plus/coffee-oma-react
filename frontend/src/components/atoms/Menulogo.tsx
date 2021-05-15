import { VFC } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import logo from 'images/coffeeoma-logo.png';
import { Link } from 'react-router-dom';

const Menulogo: VFC = () => (
  <Menu.Item as={Link} header style={{ padding: 0 }} to="/">
    <Image size="small" src={logo} />
  </Menu.Item>
);

export default Menulogo;
