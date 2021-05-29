import { FC } from 'react';
import { Header } from 'semantic-ui-react';
import ProfileForm from 'components/molecules/ProfileForm';

const RegistrationEdit: FC = () => (
  <>
    <Header
      as="h1"
      content="アカウントの編集"
      textAlign="center"
      stryle={{ marginBottom: '3rem' }}
    />
    <ProfileForm />
  </>
);

export default RegistrationEdit;
