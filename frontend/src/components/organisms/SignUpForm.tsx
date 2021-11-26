import { FC } from 'react';
import { Form, Grid, Segment, Button } from 'semantic-ui-react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import FormMessage from 'components/atoms/FormMessage';
import FormController from 'container/EnhancedFormController';
import FormControllerPassword from 'container/EnhancedFormControllerPassword';

import { UserInput } from 'model/index';
/* eslint-disable react/jsx-props-no-spreading */

const SignUpForm: FC<{
  methods: UseFormReturn<UserInput>;
  onSubmit: (data: UserInput) => Promise<void>;
}> = ({ methods, onSubmit }) => (
  <FormProvider {...methods}>
    <Form size="small" onSubmit={methods.handleSubmit(onSubmit)}>
      <Grid columns={3} centered style={{ margin: '4em' }}>
        <Grid.Column width={3} />
        <Grid.Column width={10}>
          <Segment>
            <FormController
              name="name"
              icon="users"
              label="アカウント名"
              min
              errormessage="アカウント名が入力されていません。"
            />
            <FormController
              name="email"
              label="メールアドレス"
              icon="mail"
              required
              errormessage="メールアドレスが入力されていません。"
            />
            <FormControllerPassword />
            <Form.Field
              style={{ textAlign: 'center', justifyContent: 'center' }}
            >
              <Form.Button color="teal" data-testid="submit" animated="fade">
                <Button.Content visible>登録</Button.Content>
                <Button.Content hidden>Submit</Button.Content>
              </Form.Button>
            </Form.Field>
          </Segment>
          <FormMessage issignup />
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    </Form>
  </FormProvider>
);

export default SignUpForm;
