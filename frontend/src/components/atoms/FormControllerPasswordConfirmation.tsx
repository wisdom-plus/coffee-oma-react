import { FC } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { Input, Form, Ref } from 'semantic-ui-react';
import { FormInputType } from 'model/index';
/* eslint-disable react/jsx-props-no-spreading */

const FormControllerPasswordConfirmation: FC<{
  name: FormInputType;
  label: string;
  icon: string;
}> = ({ name, label, icon }) => {
  const {
    formState: { errors },
  } = useFormContext<Record<FormInputType, string>>();

  const passwordconfirmation = useWatch<{ password: string }>({
    name: 'password',
    defaultValue: '',
  });

  return (
    <Controller
      name={name}
      rules={{
        validate: (value) =>
          value === passwordconfirmation || 'パスワードが一致しません',
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
            type="password"
            data-testid={name}
            required
            iconPosition="left"
            placeholder={name}
            {...method}
          />
        </Ref>
      )}
    />
  );
};

export default FormControllerPasswordConfirmation;
