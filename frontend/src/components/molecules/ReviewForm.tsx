import { FC } from 'react';
import { Grid, Form, Segment } from 'semantic-ui-react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import FormController from 'container/EnhancedFormController';
import { ReviewFormData } from 'model/index';
import RateFormController from 'container/EnhancedRateFormController';
/* eslint-disable react/jsx-props-no-spreading */

const ReviewForm: FC<{
  methods: UseFormReturn<ReviewFormData>;
  onSubmit: (data: ReviewFormData) => Promise<void>;
}> = ({ methods, onSubmit }) => (
  <Grid>
    <Grid.Column>
      <h1>レビューの投稿</h1>
      <FormProvider {...methods}>
        <Form size="small" onSubmit={methods.handleSubmit(onSubmit)}>
          <Segment>
            <FormController
              name="title"
              icon="users"
              label="タイトル"
              required
              errormessage="タイトルが入力されていません。"
            />
            <RateFormController />
            <FormController
              name="content"
              label="レビュー内容"
              textarea
              required
              errormessage="レビュー本文が入力されていません。"
            />
            <Form.Field
              style={{ textAlign: 'center', justifyContent: 'center' }}
            >
              <Form.Button color="teal" content="登録" data-testid="submit" />
            </Form.Field>
          </Segment>
        </Form>
      </FormProvider>
    </Grid.Column>
  </Grid>
);

export default ReviewForm;
