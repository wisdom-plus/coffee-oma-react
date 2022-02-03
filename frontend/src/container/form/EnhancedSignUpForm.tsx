import { FC } from 'react';
import useSignUpForm from 'hooks/SignUpForm';
import SignUpForm from 'components/organisms/SignUpForm';
/* eslint-disable react/jsx-props-no-spreading */

const EnhancedSignUpForm: FC = () => {
  const methods = useSignUpForm();

  return <SignUpForm {...methods} />;
};

export default EnhancedSignUpForm;
