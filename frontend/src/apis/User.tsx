import axios from 'axios';
import { UserInput, CurrentUser } from 'model/index';
import { SignedInAxios } from 'apis/Session';
import { RegistrationNewURL, RegistrationShowURL } from 'urls/index';

export const Fetchregistrationnew = async (
  user: UserInput,
): Promise<number> => {
  try {
    const response = await axios({
      method: 'post',
      url: RegistrationNewURL,
      data: user,
    });

    return response.status;
  } catch (error) {
    throw new Error();
  }
};

export const FetchRegistrationShow = (
  UserId: string,
): Promise<{ data: CurrentUser } | 401> =>
  axios
    .get<{ data: CurrentUser } | 401>(RegistrationShowURL(UserId))
    .then<{ data: CurrentUser } | 401>((result) =>
      result.status === 200 ? result.data : 401,
    )
    .catch(() => 401);

export const FetchRegistrationUpdate = (
  User: FormData,
): Promise<{ data: CurrentUser } | 401> =>
  SignedInAxios.put<{ data: CurrentUser } | 401>(RegistrationNewURL, User)
    .then<{ data: CurrentUser } | 401>((result) =>
      result.status === 200 ? result.data : 401,
    )
    .catch(() => 401);
export default Fetchregistrationnew;
