import { FC } from 'react';
import RateFormController from 'components/atoms/RateFormController';
import useRateFormController from 'hooks/RateFormController';

const EnhancedRateFormController: FC<{
  errormessage: string;
  required?: boolean;
}> = ({ errormessage }) => {
  const { errors } = useRateFormController();

  return (
    <RateFormController
      {...{
        errors,
        errormessage,
      }}
    />
  );
};

export default EnhancedRateFormController;
