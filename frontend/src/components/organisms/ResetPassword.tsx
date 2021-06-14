import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Header, Segment, Form, Input } from 'semantic-ui-react';
import { useForm, Controller } from 'react-hook-form';
import { Fetchpasswordreset } from 'apis/Session';
import FormMessage from 'components/atoms/FormMessage';

const ResetPassword: FC = () => {
  const history = useHistory();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<{ email: string }>({ criteriaMode: 'all' });

  const onSubmit = async (data: { email: string }) => {
    await Fetchpasswordreset(data)
      .then((result) => result === 200 && history.push('/send_mail'))
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
                name="email"
                control={control}
                rules={{
                  required: 'メールアドレスが入力されていません。',
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Form.Field
                    error={
                      errors.email && {
                        content: errors.email?.message,
                        pointing: 'below',
                      }
                    }
                    control={Input}
                    label="メールアドレス"
                    icon="mail"
                    required
                    iconPosition="left"
                    placeholder="e-mail"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              <Form.Field
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                <Form.Button color="teal" content="送信" />
              </Form.Field>
            </Form>
          </Segment>
          <FormMessage isreset />
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    </>
  );
};

export default ResetPassword;
