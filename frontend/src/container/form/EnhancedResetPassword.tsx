import { FC } from 'react';
import ResetPassword from 'components/organisms/ResetPassword';
import useResetPassword from 'hooks/form/ResetPassword';
/* eslint-disable react/jsx-props-no-spreading */

const EnhacedResetPassword: FC = () => {
  const methods = useResetPassword();

  return <ResetPassword {...methods} />;
};

export default EnhacedResetPassword;
