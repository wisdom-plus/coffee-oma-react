import { FC } from 'react';
import { Menu } from 'semantic-ui-react';

const GuestLoginButton: FC = () => (
  <Menu.Item
    header
    onClick={() => console.log('OK')}
    content="ゲストログイン"
  />
);

export default GuestLoginButton;
