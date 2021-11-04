import { FC, useState } from 'react';
import { Form, Grid, Segment, Accordion, Icon } from 'semantic-ui-react';
import { useForm, FormProvider } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserEditForm } from 'model/index';
import { FetchRegistrationUpdate } from 'apis/User';
import IconForm from 'components/atoms/IconForm';
import LoginState from 'atom';
import { useRecoilState } from 'recoil';
import FormController from 'container/EnhancedFormController';
import FormControllerPassword from 'container/EnhancedFormControllerPassword';

/* eslint-disable react/jsx-props-no-spreading */

export interface CustomFormData extends FormData {
  append(name: string, value: string | number | Blob, fileName?: string): void;
}

const ProfileForm: FC = () => {
  const [file, setFile] = useState<Blob>();
  const [active, setActive] = useState(false);
  const [user, setUser] = useRecoilState(LoginState);
  const history = useHistory();
  const methods = useForm<UserEditForm>({
    criteriaMode: 'all',
    defaultValues: {
      name: user.name,
      email: user.email,
      profile: user.profile,
    },
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
          : history.push('/registration/edit', {
              message: '入力が正しくありません。',
              type: 'error',
            }),
      )
      .catch(() =>
        history.push('/mypage', {
          message: 'エラーが発生しました。',
          type: 'error',
        }),
      );
  };
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) =>
    e.target.files && setFile(e.target.files[0]);

  return (
    <FormProvider {...methods}>
      <Form size="small" onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid columns={3} centered style={{ margin: '4em' }}>
          <Grid.Column width={3} />
          <Grid.Column width={10}>
            <Segment>
              <IconForm
                defaultimage={user.icon?.url}
                file={file}
                onChange={onChangeFile}
              />
              <FormController
                name="name"
                label="アカウント名"
                icon="users"
                required
                min
              />
              <FormController name="email" label="メールアドレス" icon="mail" />
              <Accordion>
                <Accordion.Title
                  onClick={() => setActive((prev) => !prev)}
                  data-testid="accodion"
                >
                  <Icon name="dropdown" />
                  パスワードを変更する
                </Accordion.Title>
                <Accordion.Content active={active}>
                  <FormController
                    name="current_password"
                    label="現在のパスワード"
                    icon="key"
                  />
                  <FormControllerPassword />
                </Accordion.Content>
              </Accordion>
              <FormController name="profile" label="プロフィール" textarea />
              <Form.Field
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                <Form.Button color="teal" content="登録" data-testid="submit" />
              </Form.Field>
            </Segment>
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid>
      </Form>
    </FormProvider>
  );
};

export default ProfileForm;
