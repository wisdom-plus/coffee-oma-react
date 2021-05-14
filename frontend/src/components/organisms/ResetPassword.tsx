import { FC, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Header, Segment, Form, Ref, Input } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { Fetchpasswordreset } from 'apis/Session';
import FormMessage from 'components/atoms/FormMessage';
import { ResetPasswordParams } from 'model/index';

const ResetPassword: FC = () => {
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm<ResetPasswordParams>({ criteriaMode: 'all' });

  const password = useRef({});
  password.current = watch('password', '');

  const emailhook = register('email', {
    required: 'メールアドレスが入力されていません。',
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

  const onSubmit = async (data: ResetPasswordParams) => {
    await Fetchpasswordreset(data)
      .then((result) => result === 200 && history.push('/send_mail'))
      .catch(() => reset());
  };

  return (
    <>
      <Grid columns={3} centered style={{ margin: '4em' }}>
        <Grid.Column width={3} />
        <Grid.Column width={10}>
          <Segment>
            <Header
              as="h3"
              textAlign="center"
              content="パスワードをリセットします"
            />
            <Form onSubmit={handleSubmit(onSubmit)}>
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
              <Form.Field
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                <Form.Button color="teal" content="ログイン" />
              </Form.Field>
            </Form>
          </Segment>
          <FormMessage isreset />
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    </>
  );
};

export default ResetPassword;
