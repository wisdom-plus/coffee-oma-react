import axios from 'axios';
import { UserInput, CurrentUser } from 'model/index';
import { SignedInAxios } from 'apis/Session';
import { RegistrationNewURL, RegistrationShowURL } from '../urls/index';

export const Fetchregistrationnew = (
  user: UserInput,
): Promise<number | undefined> =>
  axios({
    method: 'post',
    url: RegistrationNewURL,
    data: user,
  })
    .then((result) => result.status)
    .catch((error: undefined) => error);

export const FetchRegistrationShow = (
  UserId: string,
): Promise<{ data: CurrentUser } | 401> =>
  axios
    .get<{ data: CurrentUser } | 401>(RegistrationShowURL(UserId))
    .then<{ data: CurrentUser } | 401>((result) =>
      result.status === 200 ? result.data : 401,
    )
    .catch(() => 401);

export const FetchRegistrationUpdate = (User: FormData): Promise<number> =>
  SignedInAxios.put(RegistrationNewURL, User)
    .then((result) => result.status)
    .catch(() => 401);
export default Fetchregistrationnew;
