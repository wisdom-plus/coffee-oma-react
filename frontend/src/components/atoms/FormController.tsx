import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Input, Form } from 'semantic-ui-react';
import { Session } from 'model/index';
/* eslint-disable react/jsx-props-no-spreading */

const FormController: FC<{
  name: keyof Session;
  label: string;
  icon: string;
  errormessage: string;
}> = ({ name, label, icon, errormessage }) => {
  const {
    formState: { errors },
  } = useFormContext<Session>();

  return (
    <Controller
      name={name}
      rules={{
        required: errormessage,
      }}
      render={({ field }) => (
        <Form.Field
          error={
            errors[name] && {
              content: errors[name]?.message,
              pointing: 'below',
            }
          }
          control={Input}
          label={label}
          icon={icon}
          type={name}
          data-testid={name}
          required
          iconPosition="left"
          placeholder={name}
          {...field}
        />
      )}
    />
  );
};

export default FormController;
