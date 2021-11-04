import { useFormContext, useWatch, DeepMap, FieldError } from 'react-hook-form';
import { FormInputType } from 'model/index';

/* eslint-disable react/jsx-props-no-spreading */

const useFormControllerPassword = (): {
  errors: DeepMap<Record<FormInputType, string>, FieldError>;
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
