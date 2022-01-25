import { useLayoutEffect } from 'react';
import { useRecoilValue } from 'recoil';
import LoginState from 'Atom';
import { useNavigate } from 'react-router-dom';
import { CurrentUser } from 'model/index';
import { useCookies } from 'react-cookie';

const useMyProfile = (): CurrentUser => {
  const user = useRecoilValue(LoginState);
  const navigate = useNavigate();
  const [cookie] = useCookies(['token']);

  useLayoutEffect(() => {
    if (!cookie.token) {
      navigate('/sign_in', {
        state: {
          message: 'ログインしてから、お試しください。',
          type: 'error',
        },
      });
    }
  }, [navigate, user, cookie]);

  return user;
};

export default useMyProfile;
