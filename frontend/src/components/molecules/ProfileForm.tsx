import { FC, Dispatch, SetStateAction } from 'react';
import {
  Form,
  Grid,
  Segment,
  Accordion,
  Icon,
  Button,
} from 'semantic-ui-react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import IconForm from 'container/EnhancedIconForm';
import FormController from 'container/EnhancedFormController';
import FormControllerPassword from 'container/EnhancedFormControllerPassword';
import { UserEditForm, CurrentUser } from 'model/index';

/* eslint-disable react/jsx-props-no-spreading */

type Props = {
  methods: UseFormReturn<UserEditForm>;
  file: Blob | undefined;
  onSubmit: (data: UserEditForm) => Promise<void>;
  onChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void | null;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  user: CurrentUser;
};

const ProfileForm: FC<Props> = ({
  methods,
  onSubmit,
  file,
  onChangeFile,
  active,
  setActive,
  user,
}) => (
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
              value={user?.name}
              errormessage="アカウント名が入力されていません。"
            />
            <FormController
              name="email"
              label="メールアドレス"
              icon="mail"
              value={user?.email}
            />
            <Accordion>
              <Accordion.Title
                onClick={() => setActive((prev) => !prev)}
                data-testid="accodion"
              >
                <Icon name="dropdown" />
                パスワードを変更する
              </Accordion.Title>
              <Accordion.Content active={active}>
                <FormControllerPassword />
              </Accordion.Content>
            </Accordion>
            <FormController
              name="profile"
              label="プロフィール"
              textarea
              value={user?.profile}
            />
            <Form.Field
              style={{ textAlign: 'center', justifyContent: 'center' }}
            >
              <Form.Button color="teal" data-testid="submit" animated="fade">
                <Button.Content visible>登録</Button.Content>
                <Button.Content hidden>Submit</Button.Content>
              </Form.Button>
            </Form.Field>
          </Segment>
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    </Form>
  </FormProvider>
);

export default ProfileForm;
