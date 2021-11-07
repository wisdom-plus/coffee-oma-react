import { FC } from 'react';
import FormControllerPassword from 'components/atoms/FormControllerPassword';
import useFormControllerPassword from 'hooks/FormControllerPassword';
/* eslint-disable react/jsx-props-no-spreading */

const EnhancedFormControllerPassword: FC<{ required?: boolean }> = ({
  required,
}) => {
  const methods = useFormControllerPassword();

  return <FormControllerPassword {...methods} required={required} />;
};

export default EnhancedFormControllerPassword;
