import { FC } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import Menulogo from 'components/atoms/Menulogo';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import LoginState from 'atom';

const Topmenu: FC = () => {
  const user = useRecoilValue(LoginState);

  return (
    <Menu fixed="top" inverted color="teal">
      <Container>
        <Menulogo />
        {user.email ? (
          <>
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
            <Menu.Item header as={Link} to="/sign_out" content="ログアウト" />
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

export default Topmenu;
