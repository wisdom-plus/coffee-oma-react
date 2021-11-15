import { useFormContext, FieldError } from 'react-hook-form';
import { FormInputType } from 'model/index';

/* eslint-disable react/jsx-props-no-spreading */

const useRateFormController = (): {
  errors: Partial<Record<FormInputType, FieldError | undefined>>;
} => {
  const {
    formState: { errors },
  } = useFormContext<Record<FormInputType, string>>();

  return { errors };
};

export default useRateFormController;
