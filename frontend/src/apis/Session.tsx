import axios from 'axios';
import {
  Session,
  Token,
  CurrentUser,
  ResetPasswordEditdata,
} from 'model/index';
import {
  sessionnewURL,
  sessiondestroyURL,
  sessionvalidateURL,
  sessionconfirmationURL,
  passwordresetURL,
  passwordreseteditURL,
} from '../urls/index';

type login = {
  data: CurrentUser;
  headers: Token;
};

type ResetPasswordEditParams = {
  headers: Token;
  data: ResetPasswordEditdata;
};

// const StorageSet = (result: Token): void => {
//   localStorage.setItem('access-token', result['access-token']);
//   localStorage.setItem('client', result.client);
//   localStorage.setItem('uid', result.uid);
// };

export const Fetchsessionnew = async (session: Session): Promise<login> => {
  try {
    const response = await axios.post<{ data: CurrentUser }>(sessionnewURL, {
      ...session,
    });

    return { data: response.data.data, headers: response.headers as Token };
  } catch (error) {
    throw new Error();
  }
};

export const Fetchsessiondestroy = async (token: {
  token: Token;
}): Promise<number> => {
  try {
    const response = await axios({
      method: 'delete',
      url: sessiondestroyURL,
      headers: token.token,
    });

    return response.status;
  } catch (e) {
    throw new Error();
  }
};

export const Fetchsessionvaildate = async (token: {
  token: Token;
}): Promise<{
  data: CurrentUser;
}> => {
  try {
    const { data } = await axios.get<{ data: CurrentUser }>(
      sessionvalidateURL,
      {
        headers: token.token,
      },
    );

    return data;
  } catch (error) {
    throw new Error();
  }
};

export const Fetchsessionconfirm = (params: {
  email: string;
}): Promise<number> =>
  axios
    .post(sessionconfirmationURL, params)
    .then((result) => result.status)
    .catch(() => 404);

export const Fetchpasswordreset = (params: {
  email: string;
}): Promise<number | undefined> =>
  axios
    .post(passwordresetURL, params)
    .then((result) => result.status)
    .catch((error: undefined) => error);

export const Fetchpasswordresetedit = (
  params: ResetPasswordEditParams,
): Promise<number | undefined> =>
  axios({
    method: 'put',
    url: passwordreseteditURL,
    headers: { ...params.headers },
    params: { ...params.data },
  })
    .then((result) => result.status)
    .catch((error: undefined) => error);

export const SignedInAxios = axios.create({
  headers: {
    'access-token': localStorage.getItem('access-token'),
    client: localStorage.getItem('client'),
    uid: localStorage.getItem('uid'),
  },
});
export default Fetchsessionnew;
