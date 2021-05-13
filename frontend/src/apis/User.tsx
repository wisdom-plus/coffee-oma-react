import axios from 'axios';
import { UserInput, ResetPasswordParams } from 'model/index';
import { registrationnewURL, passwordresetURL } from '../urls/index';

export const Fetchregistrationnew = (
  user: UserInput,
): Promise<number | undefined> =>
  axios({
    method: 'post',
    url: registrationnewURL,
    data: user,
  })
    .then((result) => result.status)
    .catch((error: undefined) => error);

export const Fetchpasswordreset = (
  params: ResetPasswordParams,
): Promise<number | undefined> =>
  axios
    .post(passwordresetURL, params)
    .then((result) => result.status)
    .catch((error: undefined) => error);

export default Fetchregistrationnew;
