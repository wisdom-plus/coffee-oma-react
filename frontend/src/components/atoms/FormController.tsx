import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Input, Form, Ref } from 'semantic-ui-react';
import { Session } from 'model/index';
/* eslint-disable react/jsx-props-no-spreading */

const FormController: FC<{
  name: keyof Session;
  label: string;
  icon: string;
  errormessage: string;
  required: boolean;
}> = ({ name, label, icon, errormessage, required }) => {
  const {
    formState: { errors },
  } = useFormContext<Session>();

  return (
    <Controller
      name={name}
      rules={{
        required: errormessage,
      }}
      defaultValue=""
      render={({ field: { ref, ...method } }) => (
        <Ref innerRef={ref}>
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
            required={required}
            iconPosition="left"
            placeholder={name}
            {...method}
          />
        </Ref>
      )}
    />
  );
};

export default FormController;
