import { FC } from 'react';
import { Message, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

type Props = {
  issignin?: boolean;
  isconfirm?: boolean;
  issignup?: boolean;
  isreset?: boolean;
};

const FormMessage: FC<Props> = ({ issignin, isconfirm, issignup, isreset }) => (
  <Message info>
    <List>
      {!isconfirm && (
        <List.Item>
          <Link to="/confirmation">確認メールが届かない場合はこちら</Link>
        </List.Item>
      )}
      {!issignin && (
        <List.Item>
          <Link to="/sign_in">ログインはこちら</Link>
        </List.Item>
      )}
      {!issignup && (
        <List.Item>
          <Link to="/sign_up">新規登録はこちら</Link>
        </List.Item>
      )}
      {!isreset && (
        <List.Item>
          <Link to="/password_reset">パスワードを忘れましたか</Link>
        </List.Item>
      )}
    </List>
  </Message>
);

export default FormMessage;
