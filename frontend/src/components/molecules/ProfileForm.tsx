import { FC, useRef, useState } from 'react';
import { Form, Grid, Input, Segment, Ref, TextArea } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserEditForm } from 'model/index';
import { FetchRegistrationUpdate } from 'apis/User';
import IconForm from 'components/atoms/IconForm';
import LoginState from 'atom';
import { useRecoilValue } from 'recoil';

export interface CustomFormData extends FormData {
  append(name: string, value: string | number | Blob, fileName?: string): void;
}

const ProfileForm: FC = () => {
  const [file, setFile] = useState<Blob>();
  const user = useRecoilValue(LoginState);
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm<UserEditForm>({
    criteriaMode: 'all',
  });
  const password = useRef({});
  password.current = watch('password', '');
  const namehook = register('name', {
    minLength: {
      value: 2,
      message: 'アカウント名は最低2文字以上必要です',
    },
  });
  const emailhook = register('email');
  const passhook = register('password', {
    minLength: {
      value: 8,
      message: 'パスワードは最低８文字以上必要です',
    },
  });

  const confirhook = register('password_confirmation', {
    validate: (value) =>
      value === password.current || 'パスワードが一致しません',
  });
  const profilehook = register('profile');

  const onSubmit = async (data: UserEditForm) => {
    const formdata = new FormData() as CustomFormData;
    const keys = Object.keys(data);
    const values = Object.values(data);
    keys.map((key, index) => formdata.append(`session[${key}]`, values[index]));
    if (file !== undefined) {
      formdata.append('session[icon]', file);
    }
    await FetchRegistrationUpdate(formdata)
      .then((result) => (result === 200 ? history.push('/') : reset(data)))
      .catch(() => reset(data));
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
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
              onChange={onChange}
            />
            <Ref innerRef={namehook.ref}>
              <Form.Field
                error={
                  errors.name && {
                    content: errors.name?.message,
                    pointing: 'below',
                  }
                }
                control={Input}
                defaultValue={user.name}
                placeholder="account-name"
                label="アカウント名"
                icon="users"
                iconPosition="left"
                onChange={namehook.onChange}
                onBlur={namehook.onBlur}
                name={namehook.name}
              />
            </Ref>
            <Ref innerRef={emailhook.ref}>
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
                required
                onChange={emailhook.onChange}
                onBlur={emailhook.onBlur}
                name={emailhook.name}
              />
            </Ref>
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
                type="password"
                onChange={confirhook.onChange}
                onBlur={confirhook.onBlur}
                name={confirhook.name}
              />
            </Ref>

            <Ref innerRef={profilehook.ref}>
              <Form.Field
                control={TextArea}
                placeholder="item-caption"
                id="caption"
                label="プロフィール"
                defaultValue={user.profile}
                onChange={profilehook.onChange}
                onBlur={profilehook.onBlur}
                name={profilehook.name}
                rows={6}
                error={
                  errors.profile && {
                    content: errors.profile?.message,
                    pointing: 'below',
                  }
                }
              />
            </Ref>

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
