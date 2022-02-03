import { FC } from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';
import MenuLogo from 'components/atoms/MenuLogo';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import LoginState from 'Atom';
import GuestLoginButton from 'container/button/EnhancedGuestLoginButton';

const TopMenu: FC = () => {
  const user = useRecoilValue(LoginState);

  return (
    <Menu fixed="top" inverted color="teal">
      <Container>
        <MenuLogo />
        <Menu.Item header as={Link} to="/products">
          <Icon name="chat" />
          アイテム一覧
        </Menu.Item>
        <Menu.Item header as={Link} to="/products/ranking">
          <Icon name="chess queen" />
          ランキング
        </Menu.Item>

        {user.email ? (
          <Menu.Menu position="right">
            <Menu.Item header as={Link} to="/mypage">
              <Icon name="address card outline" />
              プロフィール
            </Menu.Item>
            <Menu.Item
              header
              as={Link}
              to="/registration/edit"
              content="アカウント編集"
            />
            <Menu.Item header as={Link} to="/sign_out" data-testid="logout">
              <Icon name="sign-out" />
              ログアウト
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            <GuestLoginButton />
            <Menu.Item header as={Link} to="/sign_up">
              <Icon name="signup" />
              新規登録
            </Menu.Item>
            <Menu.Item header as={Link} to="/sign_in">
              <Icon name="sign-in" />
              ログイン
            </Menu.Item>
          </Menu.Menu>
        )}
      </Container>
    </Menu>
  );
};

export default TopMenu;
