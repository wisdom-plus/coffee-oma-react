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
    const API = async () => {
      try {
        const response = await FetchRegistrationShow(id);
        setUser((prevUser) => ({ ...prevUser, ...response.data }));
      } catch (e) {
        history.push('/', {
          message: 'エラーが発生しました。',
          type: 'error',
        });
      }
    };
    void API();
    console.log(user);
  }, [id, history]);

  return { user, currentuser };
};

export default useUserProfile;
