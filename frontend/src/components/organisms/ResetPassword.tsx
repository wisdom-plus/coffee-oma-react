import { FC } from 'react';
import { Grid, Header, Segment, Form } from 'semantic-ui-react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import FormMessage from 'components/atoms/FormMessage';
import FormController from 'container/EnhancedFormController';
/* eslint-disable react/jsx-props-no-spreading */

const ResetPassword: FC<{
  methods: UseFormReturn<{ email: string }>;
  onSubmit: (data: { email: string }) => Promise<void>;
}> = ({ methods, onSubmit }) => (
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
          <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
              <FormController
                name="email"
                label="メールアドレス"
                icon="mail"
                errormessage="メールアドレスが入力されていません。"
                required
              />
              <Form.Field
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                <Form.Button color="teal" content="送信" />
              </Form.Field>
            </Form>
          </FormProvider>
        </Segment>
        <FormMessage isreset />
      </Grid.Column>
      <Grid.Column width={3} />
    </Grid>
  </>
);

export default ResetPassword;
