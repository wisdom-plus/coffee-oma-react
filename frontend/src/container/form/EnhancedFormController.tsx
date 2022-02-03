import { FC } from 'react';
import { FormInputType } from 'model/index';
import FormController from 'components/atoms/FormController';
import useFormController from 'hooks/FormController';

const EnhancedFormController: FC<{
  name: FormInputType;
  label?: string;
  icon?: string;
  errormessage?: string;
  required?: boolean;
  min?: boolean;
  textarea?: boolean;
  value?: string;
}> = ({ name, label, icon, errormessage, required, min, textarea, value }) => {
  const { errors, rule } = useFormController({
    errormessage,
    required,
    min,
  });

  return (
    <FormController
      {...{
        name,
        label,
        icon,
        required,
        min,
        errors,
        rule,
        textarea,
        value,
      }}
    />
  );
};

export default EnhancedFormController;
