import { FC } from 'react';
import { Grid, Form, Segment } from 'semantic-ui-react';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import FormController from 'container/EnhancedFormController';
import { ReviewFormData } from 'model/index';
import { FetchReviewCreate } from 'apis/Review';
import RateFormController from 'container/EnhancedRateFormController';
/* eslint-disable react/jsx-props-no-spreading */

const ReviewForm: FC = () => {
  const methods = useForm<ReviewFormData>({
    criteriaMode: 'all',
    mode: 'onBlur',
  });
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [cookie] = useCookies(['token']);

  const onSubmit = async (data: ReviewFormData) => {
    try {
      const response = await FetchReviewCreate(data, cookie.token, id);
      if (response === 200) {
        history.push('/products', {
          message: 'レビューが作成されました.',
          type: 'success',
        });
      }
    } catch (e) {
      throw Error('APIError');
    }
  };

  return (
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
};

export default ReviewForm;
