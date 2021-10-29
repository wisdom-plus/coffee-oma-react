import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { CurrentUser } from 'model/index';
import { FetchRegistrationShow } from 'apis/User';
import { useRecoilValue } from 'recoil';
import LoginState from 'atom';

const useUserProfile = (): { user: CurrentUser; currentuser: CurrentUser } => {
  const [user, setUser] = useState<CurrentUser>({} as CurrentUser);
  const { id } = useParams<{ id: string }>();
  const currentuser = useRecoilValue(LoginState);
  const history = useHistory();

  useEffect(() => {
    FetchRegistrationShow(id)
      .then((result) =>
        result !== 401
          ? setUser((prevUser) => ({ ...prevUser, ...result.data }))
          : history.push('/', {
              message: 'エラーが発生しました。',
              type: 'error',
            }),
      )
      .catch(() =>
        history.push('/', {
          message: 'エラーが発生しました。',
          type: 'error',
        }),
      );
  }, [id, history]);

  return { user, currentuser };
};

export default useUserProfile;
