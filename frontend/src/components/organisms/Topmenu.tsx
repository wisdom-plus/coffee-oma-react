import { FC } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import MenuLogo from 'components/atoms/MenuLogo';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import LoginState from 'atom';

const TopMenu: FC = () => {
  const user = useRecoilValue(LoginState);

  return (
    <Menu fixed="top" inverted color="teal">
      <Container>
        <MenuLogo />
        {user.email ? (
          <>
            <Menu.Item header as={Link} to="/products" content="アイテム一覧" />
            <Menu.Item
              header
              as={Link}
              to="/product/ranking"
              content="ランキング"
            />
            <Menu.Item
              header
              as={Link}
              to="/mypage"
              content="プロフィール"
              position="right"
            />
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
          </>
        ) : (
          <>
            <Menu.Item
              header
              as={Link}
              to="/sign_up"
              content="新規登録"
              position="right"
            />
            <Menu.Item header as={Link} to="/sign_in" content="ログイン" />
          </>
        )}
      </Container>
    </Menu>
  );
};

export default TopMenu;
