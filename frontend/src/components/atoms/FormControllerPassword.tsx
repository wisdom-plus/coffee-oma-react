import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Input, Form, Ref } from 'semantic-ui-react';
import { FormInputType } from 'model/index';
/* eslint-disable react/jsx-props-no-spreading */

const FormControllerPassword: FC<{
  name: FormInputType;
  label: string;
  icon: string;
  required?: boolean;
}> = ({ name, label, icon, required }) => {
  const {
    formState: { errors },
  } = useFormContext<Record<FormInputType, string>>();

  return (
    <Controller
      name={name}
      rules={{
        minLength: {
          value: 8,
          message: 'パスワードは最低８文字以上必要です',
        },
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

export default FormControllerPassword;
