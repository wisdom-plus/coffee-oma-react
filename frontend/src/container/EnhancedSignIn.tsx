import { FC } from 'react';
import { Form, Grid, Segment, Header } from 'semantic-ui-react';
import { useForm, FormProvider } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Session } from 'model/index';
import { Fetchsessionnew } from 'apis/Session';
import { useSetRecoilState } from 'recoil';
import LoginState from 'atom';
import FormMessage from 'components/atoms/FormMessage';
import FormController from 'components/atoms/FormController';
/* eslint-disable react/jsx-props-no-spreading */

const EnhancedSignInForm: FC = () => {
  const history = useHistory();
  const methods = useForm<Session>({ criteriaMode: 'all', mode: 'onBlur' });

  const setUser = useSetRecoilState(LoginState);

  const onSubmit = async (data: Session) => {
    await Fetchsessionnew(data)
      .then((result) =>
        result !== undefined && result.data
          ? (setUser((prevUser) => ({ ...prevUser, ...result.data })),
            history.push('/', {
              message: 'ログインに成功しました。',
              type: 'success',
            }))
          : history.push('/sign_in', {
              message: 'ログインに失敗しました。',
              type: 'error',
            }),
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
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid columns={3} centered style={{ margin: '4em' }}>
            <Grid.Column width={3} />
            <Grid.Column width={10}>
              <Segment>
                <FormController
                  name="email"
                  label="メールアドレス"
                  icon="mail"
                  errormessage="メールアドレスが入力されていません。"
                />
                <FormController
                  name="password"
                  label="パスワード"
                  icon="key"
                  errormessage="パスワードが入力されていません。"
                />
                <Form.Field
                  style={{ textAlign: 'center', justifyContent: 'center' }}
                >
                  <Form.Button
                    color="teal"
                    content="ログイン"
                    data-testid="login"
                  />
                </Form.Field>
              </Segment>
              <FormMessage issignin />
            </Grid.Column>
            <Grid.Column width={3} />
          </Grid>
        </Form>
      </FormProvider>
    </>
  );
};

export default EnhancedSignInForm;
