import { FC } from 'react';
import ProfileForm from 'components/molecules/ProfileForm';
import useProfileForm from 'hooks/ProfileForm';
/* eslint-disable react/jsx-props-no-spreading */

const EnhancedProfileForm: FC = () => {
  const methods = useProfileForm();

  return <ProfileForm {...methods} />;
};

export default EnhancedProfileForm;
