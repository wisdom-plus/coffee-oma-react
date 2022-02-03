import { FC } from 'react';
import ResetPasswordEdit from 'components/organisms/ResetPasswordEdit';
import useResetPasswordEdit from 'hooks/ResetPasswordEdit';
/* eslint-disable react/jsx-props-no-spreading */

const EnhancedResetPasswordEdit: FC = () => {
  const methods = useResetPasswordEdit();

  return <ResetPasswordEdit {...methods} />;
};

export default EnhancedResetPasswordEdit;
