import { FC } from 'react';
import SignInForm from 'components/molecules/SignInForm';
import useSignInForm from 'hooks/form/SignInForm';
/* eslint-disable react/jsx-props-no-spreading */

const EnhancedSignInForm: FC = () => {
  const form = useSignInForm();

  return <SignInForm {...form} />;
};

export default EnhancedSignInForm;
