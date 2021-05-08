import axios from 'axios';
import { UserForm } from 'model/index';
import { registrationnewURL } from '../urls/index';

export const Fetchregistrationnew = (
  user: UserForm,
): Promise<number | undefined> =>
  axios({
    method: 'post',
    url: registrationnewURL,
    data: {
      name: user.name,
      email: user.email,
      password: user.password,
      password_confirmation: user.passwordconfirmation,
    },
  })
    .then((result) => result.status)
    .catch((error: undefined) => error);

export default Fetchregistrationnew;
