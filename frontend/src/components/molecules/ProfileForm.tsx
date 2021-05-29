import { FC, useState, useEffect } from 'react';
import {
  Form,
  Grid,
  Input,
  Segment,
  TextArea,
  Accordion,
  Icon,
} from 'semantic-ui-react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserEditForm } from 'model/index';
import { FetchRegistrationUpdate } from 'apis/User';
import IconForm from 'components/atoms/IconForm';
import LoginState from 'atom';
import { useRecoilState } from 'recoil';

export interface CustomFormData extends FormData {
  append(name: string, value: string | number | Blob, fileName?: string): void;
}

const ProfileForm: FC = () => {
  const [file, setFile] = useState<Blob>();
  const [active, setActive] = useState(false);
  const [user, setUser] = useRecoilState(LoginState);
  const history = useHistory();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm<UserEditForm>({
    criteriaMode: 'all',
  });
  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('email', user.email);
      setValue('profile', user.profile);
      setValue('password', '');
      setValue('password_confirmation', '');
      setValue('current_password', '');
    }
  }, [user, setValue]);

  const passwordconfirmation = useWatch({
    control,
    name: 'password_confirmation',
    defaultValue: '',
  });

  const onSubmit = async (data: UserEditForm) => {
    const formdata = new FormData() as CustomFormData;
    const keys = Object.keys(data);
    const values = Object.values(data);
    keys.map((key, index) =>
      formdata.append(`registration[${key}]`, values[index]),
    );
    if (file !== undefined) {
      formdata.append('registration[icon]', file);
    }
    await FetchRegistrationUpdate(formdata)
      .then((result) =>
        result !== 401
          ? (setUser((prevUser) => ({ ...prevUser, ...result.data })),
            history.push('/mypage', {
              message: 'アカウント情報を更新しました。',
              type: 'success',
            }))
          : reset({
              name: user.name,
              email: user.email,
              profile: user.profile,
              password: '',
              password_confirmation: '',
              current_password: '',
            }),
      )
      .catch(() =>
        reset({
          name: user.name,
          email: user.email,
          profile: user.profile,
          password: '',
          password_confirmation: '',
          current_password: '',
        }),
      );
  };
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) =>
    e.target.files && setFile(e.target.files[0]);

  return (
    <Form size="small" onSubmit={handleSubmit(onSubmit)}>
      <Grid columns={3} centered style={{ margin: '4em' }}>
        <Grid.Column width={3} />
        <Grid.Column width={10}>
          <Segment>
            <IconForm
              defaultimage={user.icon?.url}
              file={file}
              onChange={onChangeFile}
            />
            <Controller
              name="name"
              control={control}
              rules={{
                minLength: {
                  value: 2,
                  message: 'アカウント名は２文字以上必要です',
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
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Form.Field
                  error={
                    errors.email && {
                      content: errors.email?.message,
                      pointing: 'below',
                    }
                  }
                  control={Input}
                  defaultValue={user.email}
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
            <Accordion>
              <Accordion.Title onClick={() => setActive((prev) => !prev)}>
                <Icon name="dropdown" />
                パスワードを変更する
              </Accordion.Title>
              <Accordion.Content active={active}>
                <Controller
                  name="current_password"
                  control={control}
                  rules={{
                    minLength: {
                      value: 8,
                      message: 'パスワードは最低８文字以上必要です',
                    },
                  }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Form.Field
                      error={
                        errors.current_password && {
                          content: errors.current_password?.message,
                          pointing: 'below',
                        }
                      }
                      control={Input}
                      label="現在のパスワード"
                      placeholder="password"
                      icon="key"
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
                  name="password"
                  control={control}
                  rules={{
                    minLength: {
                      value: 8,
                      message: 'パスワードは最低８文字以上必要です',
                    },
                  }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Form.Field
                      error={
                        errors.password && {
                          content: errors.password?.message,
                          pointing: 'below',
                        }
                      }
                      control={Input}
                      label="新しいパスワード"
                      placeholder="new-password"
                      icon="key"
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
                      value === passwordconfirmation ||
                      'パスワードが一致しません',
                  }}
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
                      placeholder="new-password-confirmation"
                      icon="key"
                      iconPosition="left"
                      type="password"
                      onChange={onChange}
                      onBlur={onBlur}
                      ref={ref}
                      value={value}
                    />
                  )}
                />
              </Accordion.Content>
            </Accordion>
            <Controller
              name="profile"
              control={control}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Form.Field
                  control={TextArea}
                  placeholder="item-caption"
                  id="caption"
                  label="プロフィール"
                  rows={6}
                  defaultValue={user.profile}
                  error={
                    errors.profile && {
                      content: errors.profile?.message,
                      pointing: 'below',
                    }
                  }
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
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    </Form>
  );
};

export default ProfileForm;
