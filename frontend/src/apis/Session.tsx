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

export const Fetchsessionconfirm = async (params: {
  email: string;
}): Promise<number> => {
  try {
    const response = await axios.post(sessionconfirmationURL, params);

    return response.status;
  } catch (error) {
    throw new Error();
  }
};

export const Fetchpasswordreset = async (params: {
  email: string;
}): Promise<number> => {
  try {
    const response = await axios.post(passwordresetURL, params);

    return response.status;
  } catch (error) {
    throw new Error();
  }
};

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
