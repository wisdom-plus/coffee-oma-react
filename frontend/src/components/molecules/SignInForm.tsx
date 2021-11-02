import { FC } from 'react';
import { Form, Grid, Segment, Header } from 'semantic-ui-react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import FormMessage from 'components/atoms/FormMessage';
import FormController from 'components/atoms/FormController';
import { Session } from 'model/index';
/* eslint-disable react/jsx-props-no-spreading */

const SignInForm: FC<{
  methods: UseFormReturn<Session>;
  onSubmit: (data: Session) => Promise<void>;
}> = ({ methods, onSubmit }) => (
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
                required
              />
              <FormController
                name="password"
                label="パスワード"
                icon="key"
                errormessage="パスワードが入力されていません。"
                required
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

export default SignInForm;
