import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import RateFormController from 'components/atoms/RateFormController';
/* eslint-disable react/jsx-props-no-spreading */

const EnhancedRateFormController: FC = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <RateFormController
      register={register}
      setValue={setValue}
      errors={errors}
    />
  );
};

export default EnhancedRateFormController;
