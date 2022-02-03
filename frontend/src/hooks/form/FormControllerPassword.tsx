import { useFormContext, useWatch, FieldError } from 'react-hook-form';
import { FormInputType } from 'model/index';

/* eslint-disable react/jsx-props-no-spreading */

const useFormControllerPassword = (): {
  errors: Partial<Record<FormInputType, FieldError | undefined>>;
  passwordconfirmation: string;
} => {
  const {
    formState: { errors },
  } = useFormContext<Record<FormInputType, string>>();

  const passwordconfirmation = useWatch<{ password: string }>({
    name: 'password',
    defaultValue: '',
  });

  return { errors, passwordconfirmation };
};

export default useFormControllerPassword;
