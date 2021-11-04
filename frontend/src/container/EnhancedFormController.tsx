import { FC } from 'react';
import { FormInputType } from 'model/index';
import FormController from 'components/atoms/FormController';
import useFormController from 'hooks/FormController';

const EnhancedFormController: FC<{
  name: FormInputType;
  label: string;
  icon: string;
  errormessage: string;
  required?: boolean;
  min?: boolean;
}> = ({ name, label, icon, errormessage, required, min }) => {
  const { errors, rule } = useFormController({ errormessage, required, min });

  return (
    <FormController {...{ name, label, icon, required, min, errors, rule }} />
  );
};

export default EnhancedFormController;
