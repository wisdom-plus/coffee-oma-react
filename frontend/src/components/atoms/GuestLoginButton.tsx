import { FC } from 'react';
import { Menu } from 'semantic-ui-react';

const GuestLoginButton: FC<{ onLogin: () => void }> = ({ onLogin }) => (
  <Menu.Item
    header
    onClick={() => onLogin()}
    content="ゲストログイン"
    data-testid="GuestButton"
  />
);

export default GuestLoginButton;
