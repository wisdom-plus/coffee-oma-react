import { FC } from 'react';
import { Header } from 'semantic-ui-react';
import UserShow from 'components/organisms/UserShow';

const RegistrationShow: FC = () => (
  <>
    <Header
      as="h1"
      content="ユーザーのshow"
      textAlign="center"
      stryle={{ marginBottom: '3rem' }}
    />
    <UserShow />
  </>
);

export default RegistrationShow;
