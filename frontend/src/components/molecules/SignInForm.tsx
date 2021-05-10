import { FC, useState } from 'react';
import { Form, Grid, Segment, Input, Header } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { Session } from 'model/index';
import { Fetchsessionnew } from 'apis/Session';
import { Redirect } from 'react-router-dom';
/* eslint-disable react/jsx-props-no-spreading */

type State = {
  login: boolean;
};

const SignInForm: FC = () => {
  const [state, setState] = useState<State>({ login: false });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Session>({});

  const onSubmit = async (data: Session) => {
    await Fetchsessionnew(data)
      .then((result) =>
        result !== undefined
          ? (localStorage.setItem('access-token', result['access-token']),
            localStorage.setItem('client', result.client),
            localStorage.setItem('uid', result.uid),
            setState({ login: true }))
          : reset(data),
      )
      .catch(() => reset(data));
  };

  return (
    <>
      <Header
        as="h1"
        content="ログイン"
        textAlign="center"
        style={{ marginBottom: '1rem' }}
      />
      {state.login && <Redirect to="/" />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Grid columns={3} centered style={{ margin: '4em' }}>
          <Grid.Column width={3} />
          <Grid.Column width={10} as={Segment}>
            <Form.Field
              error={
                errors.email && {
                  content: errors.email?.message,
                  pointing: 'below',
                }
              }
              control={Input}
              label="メールアドレス"
              icon="mail"
              required
              iconPosition="left"
              placeholder="e-mail"
              {...register('email', {
                required: 'メールアドレスが入力されていません。',
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
              icon="key"
              required
              iconPosition="left"
              placeholder="password"
              {...register('password', {
                required: 'パスワードが入力されていません。',
              })}
            />
            <Form.Field
              style={{ textAlign: 'center', justifyContent: 'center' }}
            >
              <Form.Button color="teal" content="ログイン" />
            </Form.Field>
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid>
      </Form>
    </>
  );
};

export default SignInForm;
