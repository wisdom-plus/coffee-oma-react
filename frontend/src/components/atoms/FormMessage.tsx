import { FC } from 'react';
import { Message, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

type Props = {
  issignin?: boolean;
  isconfirm?: boolean;
  issignup?: boolean;
};

const FormMessage: FC<Props> = ({ issignin, isconfirm, issignup }) => (
  <Message info>
    <List>
      <List.Item>
        {!isconfirm && (
          <Link to="/confirmation">確認メールが届かない場合はこちら</Link>
        )}
      </List.Item>
      <List.Item>
        {!issignin && <Link to="/sign_in">ログインはこちら</Link>}
      </List.Item>
      <List.Item>
        {!issignup && <Link to="/sign_up">新規登録はこちら</Link>}
      </List.Item>
    </List>
  </Message>
);

export default FormMessage;
