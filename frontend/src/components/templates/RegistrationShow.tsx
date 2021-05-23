import { FC } from 'react';
import { Header } from 'semantic-ui-react';
import UserShow from 'components/organisms/UserShow';

const RegistrationShow: FC<{ show?: boolean }> = ({ show = false }) => (
  <>
    <Header
      as="h1"
      content={show ? 'ユーザーの詳細' : 'マイプロフィール'}
      textAlign="center"
      stryle={{ marginBottom: '3rem' }}
    />
    <UserShow />
  </>
);

export default RegistrationShow;
