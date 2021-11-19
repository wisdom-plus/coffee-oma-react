import { useLayoutEffect } from 'react';
import { useRecoilValue } from 'recoil';
import LoginState from 'Atom';
import { useHistory } from 'react-router-dom';
import { CurrentUser } from 'model/index';
import { useCookies } from 'react-cookie';

const useMyProfile = (): CurrentUser => {
  const user = useRecoilValue(LoginState);
  const history = useHistory();
  const [cookie] = useCookies(['token']);

  useLayoutEffect(() => {
    if (!cookie.token) {
      history.push('/sign_in', {
        message: 'ログインしてから、お試しください。',
        type: 'error',
      });
    }
  }, [history, user, cookie]);

  return user;
};

export default useMyProfile;
