import axios from 'axios';
import { UserInput } from 'model/index';
import { registrationnewURL } from '../urls/index';

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

export default Fetchregistrationnew;
