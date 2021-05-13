import { FC } from 'react';
import { Form, Grid, Segment, Input, Header, Ref } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Session } from 'model/index';
import { Fetchsessionnew } from 'apis/Session';

import { useSetRecoilState } from 'recoil';
import LoginState from 'atom';
import FormMessage from 'components/atoms/FormMessage';

const SignInForm: FC = () => {
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Session>({ criteriaMode: 'all' });

  const setUser = useSetRecoilState(LoginState);

  const onSubmit = async (data: Session) => {
    await Fetchsessionnew(data)
      .then((result) =>
        result !== undefined
          ? (setUser((prevUser) => ({ ...prevUser, ...result.data })),
            history.push('/'))
          : reset(),
      )
      .catch(() => reset());
  };

  const emailhook = register('email', {
    required: 'メールアドレスが入力されていません。',
  });
  const passhook = register('password', {
    required: 'パスワードが入力されていません。',
  });

  return (
    <>
      <Header
        as="h1"
        content="ログイン"
        textAlign="center"
        style={{ marginBottom: '1rem' }}
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Grid columns={3} centered style={{ margin: '4em' }}>
          <Grid.Column width={3} />
          <Grid.Column width={10}>
            <Segment>
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
                  icon="mail"
                  required
                  iconPosition="left"
                  placeholder="e-mail"
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
                  icon="key"
                  required
                  iconPosition="left"
                  placeholder="password"
                  onChange={passhook.onChange}
                  onBlur={passhook.onBlur}
                  name={passhook.name}
                />
              </Ref>
              <Form.Field
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                <Form.Button color="teal" content="ログイン" />
              </Form.Field>
            </Segment>
            <FormMessage issignin />
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid>
      </Form>
    </>
  );
};

export default SignInForm;
