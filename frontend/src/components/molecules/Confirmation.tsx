import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Header, Segment, Form, Ref, Input } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { Fetchsessionconfirm } from 'apis/Session';
import FormMessage from 'components/atoms/FormMessage';

const Confirmation: FC = () => {
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<{ email: string }>({ criteriaMode: 'all' });

  const emailhook = register('email', {
    required: 'メールアドレスが入力されていません。',
  });

  const onSubmit = async (data: { email: string }) => {
    await Fetchsessionconfirm(data)
      .then((result) => result === 200 && history.push('/send_mail'))
      .catch(() => reset());
  };

  return (
    <>
      <Grid columns={3} centered style={{ margin: '4em' }}>
        <Grid.Column width={3} />
        <Grid.Column width={10}>
          <Segment>
            <Header as="h4" textAlign="center" content="確認メールが届かない" />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Ref innerRef={emailhook.ref}>
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
                  onChange={emailhook.onChange}
                  onBlur={emailhook.onBlur}
                  name={emailhook.name}
                />
              </Ref>
              <Form.Field
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                <Form.Button color="teal" content="ログイン" />
              </Form.Field>
            </Form>
          </Segment>
          <FormMessage isconfirm />
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    </>
  );
};

export default Confirmation;
