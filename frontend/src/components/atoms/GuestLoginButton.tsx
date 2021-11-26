import { FC } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const GuestLoginButton: FC<{ onLogin: () => void }> = ({ onLogin }) => (
  <Menu.Item header onClick={() => onLogin()} data-testid="GuestButton">
    <Icon name="signup" />
    ゲストログイン
  </Menu.Item>
);

export default GuestLoginButton;
