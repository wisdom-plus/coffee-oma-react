import { atom } from 'recoil';
import { CurrentUser } from 'model/index';

const LoginState = atom<CurrentUser>({
  key: 'LoginUser',
  default: {} as CurrentUser,
});

export default LoginState;
