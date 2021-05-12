import { FC, useRef, useState } from 'react';
import { Form, Grid, Input, Segment, Ref } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import { UserInput } from 'model/index';
import { Fetchregistrationnew } from 'apis/User';

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
  } = useForm<UserInput>({
    criteriaMode: 'all',
  });
  const password = useRef({});
  password.current = watch('password', '');
  const namehook = register('name', {
    required: 'アカウント名が入力されていません。',
    minLength: {
      value: 2,
      message: 'アカウント名は最低2文字以上必要です',
    },
  });
  const emailhook = register('email', {
    required: 'メールアドレスが入力されていません',
  });

  const passhook = register('password', {
    required: 'パスワードが入力されていません。',
    minLength: {
      value: 8,
      message: 'パスワードは最低８文字以上必要です',
    },
  });

  const confirhook = register('password_confirmation', {
    validate: (value) =>
      value === password.current || 'パスワードが一致しません',
  });

  const onSubmit = async (data: UserInput) => {
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
            pathname: '/send_mail',
          }}
        />
      )}
      <Grid columns={3} centered style={{ margin: '4em' }}>
        <Grid.Column width={3} />
        <Grid.Column width={10} as={Segment}>
          <Ref innerRef={namehook.ref}>
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
              onChange={namehook.onChange}
              onBlur={namehook.onBlur}
              name={namehook.name}
            />
          </Ref>
          <Ref innerRef={emailhook.ref}>
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
              onChange={emailhook.onChange}
              onBlur={emailhook.onBlur}
              name={emailhook.name}
            />
          </Ref>
          <Ref innerRef={passhook.ref}>
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
              onChange={passhook.onChange}
              onBlur={passhook.onBlur}
              name={passhook.name}
            />
          </Ref>
          <Ref innerRef={confirhook.ref}>
            <Form.Field
              error={
                errors.password_confirmation && {
                  content: errors.password_confirmation.message,
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
              onChange={confirhook.onChange}
              onBlur={confirhook.onBlur}
              name={confirhook.name}
            />
          </Ref>

          <Form.Field style={{ textAlign: 'center', justifyContent: 'center' }}>
            <Form.Button color="teal" content="登録" />
          </Form.Field>
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    </Form>
  );
};

export default SignUpForm;
