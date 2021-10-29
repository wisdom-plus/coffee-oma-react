import { useLayoutEffect } from 'react';
import { useRecoilValue } from 'recoil';
import LoginState from 'atom';
import { useHistory } from 'react-router-dom';
import { CurrentUser } from 'model/index';

const useMyProfile = (): CurrentUser => {
  const user = useRecoilValue(LoginState);
  const history = useHistory();

  useLayoutEffect(() => {
    if (!localStorage.getItem('access-token')) {
      history.push('/sign_in', {
        message: 'ログインしてから、お試しください。',
        type: 'error',
      });
    }
  }, [history, user]);

  return user;
};

export default useMyProfile;
