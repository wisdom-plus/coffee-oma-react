import { useState, Dispatch, SetStateAction } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserEditForm, CurrentUser } from 'model/index';
import { FetchRegistrationUpdate } from 'apis/User';
import LoginState from 'atom';
import { useRecoilState } from 'recoil';

/* eslint-disable react/jsx-props-no-spreading */

export interface CustomFormData extends FormData {
  append(name: string, value: string | number | Blob, fileName?: string): void;
}

type Props = {
  methods: UseFormReturn<UserEditForm>;
  file: Blob | undefined;
  onSubmit: (data: UserEditForm) => Promise<void>;
  onChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void | null;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  user: CurrentUser;
};

const useProfileForm = (): Props => {
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

  return { methods, file, onSubmit, onChangeFile, active, setActive, user };
};

export default useProfileForm;
