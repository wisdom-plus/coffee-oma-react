import { FC } from 'react';
import { Grid, Segment, Header, Form } from 'semantic-ui-react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import FormControllerPassword from 'components/atoms/FormControllerPassword';
import FormControllerPasswordConfirmation from 'components/atoms/FormControllerPasswordConfirmation';
/* eslint-disable react/jsx-props-no-spreading */

const ResetPasswordEdit: FC<{
  methods: UseFormReturn<{
    ['password_confirmation']: string;
    password: string;
  }>;
  onSubmit: (data: {
    ['password_confirmation']: string;
    password: string;
  }) => Promise<void>;
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
              <FormControllerPassword
                label="パスワード"
                name="password"
                icon="key"
              />
              <FormControllerPasswordConfirmation
                label="パスワード確認"
                name="password_confirmation"
                icon="key"
              />
              <Form.Field
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                <Form.Button color="teal" content="ログイン" />
              </Form.Field>
            </Form>
          </FormProvider>
        </Segment>
      </Grid.Column>
      <Grid.Column width={3} />
    </Grid>
  </>
);

export default ResetPasswordEdit;
