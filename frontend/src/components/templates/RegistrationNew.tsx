import { FC } from 'react';
import { Header } from 'semantic-ui-react';
import SignUpForm from 'container/EnhancedSignUpForm';

const RegistrationNew: FC = () => (
  <>
    <Header
      as="h1"
      content="新規登録"
      textAlign="center"
      stryle={{ marginBottom: '3rem' }}
    />
    <SignUpForm />
  </>
);

export default RegistrationNew;
