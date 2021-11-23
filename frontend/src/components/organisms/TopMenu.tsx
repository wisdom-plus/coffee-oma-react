import { FC } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import MenuLogo from 'components/atoms/MenuLogo';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import LoginState from 'Atom';
import GuestLoginButton from 'container/EnhancedGuestLoginButton';

const TopMenu: FC = () => {
  const user = useRecoilValue(LoginState);

  return (
    <Menu fixed="top" inverted color="teal">
      <Container>
        <MenuLogo />
        <Menu.Item header as={Link} to="/products" content="アイテム一覧" />
        <Menu.Item
          header
          as={Link}
          to="/product/ranking"
          content="ランキング"
        />
        {user.email ? (
          <Menu.Menu position="right">
            <Menu.Item header as={Link} to="/mypage" content="プロフィール" />
            <Menu.Item
              header
              as={Link}
              to="/registration/edit"
              content="アカウント編集"
            />
            <Menu.Item
              header
              as={Link}
              to="/sign_out"
              content="ログアウト"
              data-testid="logout"
            />
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            <GuestLoginButton />
            <Menu.Item header as={Link} to="/sign_up" content="新規登録" />
            <Menu.Item header as={Link} to="/sign_in" content="ログイン" />
          </Menu.Menu>
        )}
      </Container>
    </Menu>
  );
};

export default TopMenu;
