import { FC } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { Input, Form, Ref } from 'semantic-ui-react';
import { FormInputType } from 'model/index';
/* eslint-disable react/jsx-props-no-spreading */

const FormControllerPassword: FC = () => {
  const {
    formState: { errors },
  } = useFormContext<Record<FormInputType, string>>();

  const passwordconfirmation = useWatch<{ password: string }>({
    name: 'password',
    defaultValue: '',
  });

  return (
    <>
      <Controller
        name="password"
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
                errors.password && {
                  content: errors.password?.message,
                  pointing: 'below',
                }
              }
              control={Input}
              label="パスワード"
              icon="key"
              type="password"
              data-testid="password"
              required
              iconPosition="left"
              placeholder="password"
              {...method}
            />
          </Ref>
        )}
      />
      <Controller
        name="password_confirmation"
        rules={{
          validate: (value) =>
            value === passwordconfirmation || 'パスワードが一致しません',
        }}
        defaultValue=""
        render={({ field: { ref, ...method } }) => (
          <Ref innerRef={ref}>
            <Form.Field
              error={
                errors.password_confirmation && {
                  content: errors.password_confirmation?.message,
                  pointing: 'below',
                }
              }
              control={Input}
              label="パスワード確認"
              icon="key"
              type="password"
              data-testid="password_confirmation"
              required
              iconPosition="left"
              placeholder="password"
              {...method}
            />
          </Ref>
        )}
      />
    </>
  );
};

export default FormControllerPassword;
