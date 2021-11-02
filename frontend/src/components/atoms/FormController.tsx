import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Input, Form, Ref } from 'semantic-ui-react';
import { FormInputType } from 'model/index';
/* eslint-disable react/jsx-props-no-spreading */

const FormController: FC<{
  name: FormInputType;
  label: string;
  icon: string;
  errormessage: string;
  required?: boolean;
  min?: boolean;
}> = ({ name, label, icon, errormessage, required, min }) => {
  const {
    formState: { errors },
  } = useFormContext<Record<FormInputType, string>>();

  const rule = () => {
    if (required) {
      return { required: errormessage };
    }
    if (min) {
      return {
        required: 'アカウント名が入力されていません。',
        minLength: {
          value: 2,
          message: 'アカウント名は最低2文字以上必要です',
        },
      };
    }

    return {};
  };

  return (
    <Controller
      name={name}
      rules={rule()}
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
