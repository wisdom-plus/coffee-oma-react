import { atom } from 'recoil';
import { CurrentUser } from 'model/index';

const LoginState = atom<CurrentUser>({
  key: 'LoginUser',
  default: {
    email: '',
    id: 0,
    icon: {
      url: '',
    },
    name: '',
    profile: '',
    created_at: new Date(),
  },
});

export default LoginState;
