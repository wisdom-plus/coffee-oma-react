import { FC } from 'react';
import { Form, Grid, Input, Segment } from 'semantic-ui-react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserInput } from 'model/index';
import { Fetchregistrationnew } from 'apis/User';
import FormMessage from 'components/atoms/FormMessage';

const SignUpForm: FC = () => {
  const history = useHistory();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UserInput>({
    criteriaMode: 'all',
  });
  const passwordconfirmation = useWatch({
    control,
    name: 'password_confirmation',
    defaultValue: '',
  });

  const onSubmit = async (data: UserInput) => {
    await Fetchregistrationnew(data)
      .then((result) =>
        result !== undefined && result === 200
          ? history.push('/send_mail')
          : reset(),
      )
      .catch(() =>
        history.push('/sign_up', {
          message: '登録に失敗しました。',
          type: 'error',
        }),
      );
  };

  return (
    <Form size="small" onSubmit={handleSubmit(onSubmit)}>
      <Grid columns={3} centered style={{ margin: '4em' }}>
        <Grid.Column width={3} />
        <Grid.Column width={10}>
          <Segment>
            <Controller
              name="name"
              control={control}
              rules={{
                required: 'アカウント名が入力されていません。',
                minLength: {
                  value: 2,
                  message: 'アカウント名は最低2文字以上必要です',
                },
              }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Form.Field
                  error={
                    errors.name && {
                      content: errors.name?.message,
                      pointing: 'below',
                    }
                  }
                  control={Input}
                  placeholder="account-name"
                  label="アカウント名"
                  icon="users"
                  iconPosition="left"
                  onChange={onChange}
                  onBlur={onBlur}
                  ref={ref}
                  value={value}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'メールアドレスが入力されていません',
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
                  placeholder="e-mail"
                  icon="mail"
                  iconPosition="left"
                  type="email"
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
                minLength: {
                  value: 8,
                  message: 'パスワードは最低８文字以上必要です',
                },
              }}
              defaultValue=""
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
                  placeholder="password"
                  icon="key"
                  required
                  iconPosition="left"
                  type="password"
                  onChange={onChange}
                  onBlur={onBlur}
                  ref={ref}
                  value={value}
                />
              )}
            />
            <Controller
              name="password_confirmation"
              control={control}
              rules={{
                validate: (value) =>
                  value === passwordconfirmation || 'パスワードが一致しません',
              }}
              defaultValue=""
              render={({ field: { onChange, onBlur, value, ref } }) => (
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
                  required
                  type="password"
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
              <Form.Button color="teal" content="登録" />
            </Form.Field>
          </Segment>
          <FormMessage issignup />
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    </Form>
  );
};

export default SignUpForm;
