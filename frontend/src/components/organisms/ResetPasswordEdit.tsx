import { FC } from 'react';
import { Grid, Segment, Header, Form, Input } from 'semantic-ui-react';
import { useLocation, useHistory } from 'react-router-dom';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { Fetchpasswordresetedit } from 'apis/Session';
import { ResetPasswordEditdata } from 'model/index';

const ResetPasswordEdit: FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const history = useHistory();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ResetPasswordEditdata>({ criteriaMode: 'all' });

  const passwordconfirmation = useWatch({
    control,
    name: 'password_confirmation',
    defaultValue: '',
  });

  const onSubmit = async (data: ResetPasswordEditdata) => {
    const params = {
      data,
      headers: {
        'access-token': query.get('access-token') as string,
        client: query.get('client') as string,
        uid: query.get('uid') as string,
      },
    };
    await Fetchpasswordresetedit(params)
      .then((result) => result === 200 && history.push('/'))
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
              <Controller
                name="password"
                control={control}
                rules={{
                  minLength: {
                    value: 8,
                    message: 'パスワードは最低８文字以上必要です',
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Form.Field
                    error={
                      errors.password && {
                        content: errors.password?.message,
                        pointing: 'below',
                      }
                    }
                    control={Input}
                    label="新しいパスワード"
                    placeholder="password"
                    icon="key"
                    iconPosition="left"
                    type="password"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              <Controller
                name="password_confirmation"
                control={control}
                rules={{
                  validate: (value) =>
                    value === passwordconfirmation ||
                    'パスワードが一致しません',
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Form.Field
                    error={
                      errors.password_confirmation && {
                        content: errors.password_confirmation.message,
                        pointing: 'below',
                      }
                    }
                    control={Input}
                    label="パスワード確認"
                    placeholder="password-confirmation"
                    icon="key"
                    iconPosition="left"
                    type="password"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              <Form.Field
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                <Form.Button color="teal" content="ログイン" />
              </Form.Field>
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    </>
  );
};

export default ResetPasswordEdit;
