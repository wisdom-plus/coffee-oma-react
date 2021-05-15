import { FC, useRef } from 'react';
import { Grid, Segment, Header, Form, Input, Ref } from 'semantic-ui-react';
import { useLocation, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Fetchpasswordresetedit } from 'apis/Session';
import { ResetPasswordEditdata } from 'model/index';

const ResetPasswordEdit: FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm<ResetPasswordEditdata>({ criteriaMode: 'all' });

  const password = useRef({});
  password.current = watch('password', '');

  const passhook = register('password', {
    required: 'パスワードが入力されていません。',
    minLength: {
      value: 8,
      message: 'パスワードは最低８文字以上必要です',
    },
  });

  const confirhook = register('password_confirmation', {
    validate: (value) =>
      value === password.current || 'パスワードが一致しません',
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
              <Ref innerRef={passhook.ref}>
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
                  onChange={passhook.onChange}
                  onBlur={passhook.onBlur}
                  name={passhook.name}
                />
              </Ref>
              <Ref innerRef={confirhook.ref}>
                <Form.Field
                  error={
                    errors.password_confirmation && {
                      content: errors.password_confirmation.message,
                      pointing: 'below',
                    }
                  }
                  control={Input}
                  label="メールアドレス"
                  placeholder="password-confirmation"
                  icon="key"
                  iconPosition="left"
                  required
                  type="password"
                  onChange={confirhook.onChange}
                  onBlur={confirhook.onBlur}
                  name={confirhook.name}
                />
              </Ref>
              <Form.Field
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                <Form.Button color="teal" content="ログイン" />
              </Form.Field>
            </Form>
          </Segment>
        </Grid.Column>{' '}
        <Grid.Column width={3} />
      </Grid>
    </>
  );
};

export default ResetPasswordEdit;
