import { FC } from 'react';
import { Form, Grid, Segment, Input, Header } from 'semantic-ui-react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Session } from 'model/index';
import { Fetchsessionnew } from 'apis/Session';
import { useSetRecoilState } from 'recoil';
import LoginState from 'atom';
import FormMessage from 'components/atoms/FormMessage';

const SignInForm: FC = () => {
  const history = useHistory();
  const {
    control,
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
            history.push('/', {
              message: 'ログインに成功しました。',
              type: 'success',
            }))
          : reset(),
      )
      .catch(() =>
        history.push('/sign_in', {
          message: 'エラーが発生しました。',
          type: 'error',
        }),
      );
  };

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
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'メールアドレスが入力されていません。',
                }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
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
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    value={value}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                rules={{
                  required: 'パスワードが入力されていません。',
                }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
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
                    type="password"
                    iconPosition="left"
                    placeholder="password"
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    value={value}
                  />
                )}
              />
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
