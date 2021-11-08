import axios from 'axios';
import { UserInput, CurrentUser, Token } from 'model/index';
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

export const FetchRegistrationShow = async (
  UserId: string,
): Promise<{ data: CurrentUser }> => {
  try {
    const response = await axios.get<{ data: CurrentUser }>(
      RegistrationShowURL(UserId),
    );

    return response.data;
  } catch (error) {
    throw new Error();
  }
};

export const FetchRegistrationUpdate = async (
  User: FormData,
  headers: Token,
): Promise<{ data: CurrentUser; status: number }> => {
  try {
    const response = await axios.put<{ data: CurrentUser }>(
      RegistrationNewURL,
      User,
      { headers },
    );

    return { data: response.data.data, status: response.status };
  } catch (error) {
    throw new Error();
  }
};
export default Fetchregistrationnew;
