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
    defaultValues: { title: '', rate: 0, content: '' },
  });
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [cookie] = useCookies(['token']);
  const RemoveRate = () => {
    const rates = document.getElementById('review-form-rating');
    if (rates) {
      const reveiwrates = rates.getElementsByClassName('active icon');
      const elements = Array.from(reveiwrates);
      elements.map((rate) => rate.classList.remove('active'));
    }
  };

  const onSubmit = async (data: ReviewFormData) => {
    try {
      const response = await FetchReviewCreate(data, cookie.token, id);
      if (response === 201) {
        history.push(`/product/${id}`, {
          message: 'レビューが作成されました.',
          type: 'success',
        });
        methods.reset();
        RemoveRate();
      } else {
        history.push('/products', {
          message: 'エラーが発生しました。',
          type: 'error',
        });
      }
    } catch (e) {
      history.push('/products', {
        message: 'エラーが発生しました。',
        type: 'error',
      });
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
};

export default ReviewForm;
