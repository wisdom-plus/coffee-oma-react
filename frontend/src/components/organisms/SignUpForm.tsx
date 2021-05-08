import { FC, useRef, useState } from 'react';
import { Form, Grid, Input, Segment } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import { UserForm } from 'model/index';
import { Fetchregistrationnew } from 'apis/User';
/* eslint-disable react/jsx-props-no-spreading */

type State = {
  created: 'OK' | 'Failure';
};

const SignUpForm: FC = () => {
  const [state, setState] = useState<State>({ created: 'Failure' });
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm<UserForm>({
    criteriaMode: 'all',
  });
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = async (data: UserForm) => {
    await Fetchregistrationnew(data)
      .then((result) =>
        result !== undefined && result === 200
          ? setState({ created: 'OK' })
          : reset(data),
      )
      .catch(() => reset(data));
  };

  return (
    <Form size="small" onSubmit={handleSubmit(onSubmit)}>
      {state.created === 'OK' && (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      )}
      <Grid columns={3} cemterd style={{ margin: '4em' }}>
        <Grid.Column width={3} />
        <Grid.Column width={10} as={Segment}>
          <Form.Field
            error={
              errors.name && {
                content: errors.name?.message,
                pointing: 'below',
              }
            }
            control={Input}
            placeholder="account-name"
            label="アカウント名"
            icon="users"
            required
            iconPosition="left"
            {...register('name', {
              required: 'アカウント名が入力されていません。',
              minLength: {
                value: 2,
                message: 'アカウント名は最低2文字以上必要です',
              },
            })}
          />
          <Form.Field
            error={
              errors.email && {
                content: errors.email?.message,
                pointing: 'below',
              }
            }
            control={Input}
            label="メールアドレス"
            placeholder="e-mail"
            icon="mail"
            iconPosition="left"
            type="email"
            required
            {...register('email', {
              required: 'メールアドレスが入力されていません',
            })}
          />
          <Form.Field
            error={
              errors.password && {
                content: errors.password?.message,
                pointing: 'below',
              }
            }
            control={Input}
            label="パスワード"
            placeholder="password"
            icon="key"
            required
            iconPosition="left"
            type="password"
            {...register('password', {
              required: 'パスワードが入力されていません。',
              minLength: {
                value: 8,
                message: 'パスワードは最低８文字以上必要です',
              },
            })}
          />
          <Form.Field
            error={
              errors.passwordconfirmation && {
                content: errors.passwordconfirmation?.message,
                pointing: 'below',
              }
            }
            control={Input}
            label="メールアドレス"
            placeholder="password-confirmation"
            icon="key"
            iconPosition="left"
            required
            type="password"
            {...register('passwordconfirmation', {
              validate: (value) =>
                value === password.current || 'パスワードが一致しません',
            })}
          />

          <Form.Field style={{ textAlign: 'center', justifyContent: 'center' }}>
            <Form.Button color="teal" content="submit" />
          </Form.Field>
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    </Form>
  );
};

export default SignUpForm;
