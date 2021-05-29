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
  sessionvaildateURL,
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

const StorageSet = (result: Token): void => {
  localStorage.setItem('access-token', result['access-token']);
  localStorage.setItem('client', result.client);
  localStorage.setItem('uid', result.uid);
};

export const Fetchsessionnew = (session: Session): Promise<login | undefined> =>
  axios
    .post<login>(sessionnewURL, { ...session })
    .then<login>((result) => {
      StorageSet(result.headers);

      return result.data;
    })
    .catch((error: undefined) => error);

export const Fetchsessiondestroy = (): Promise<number | undefined> =>
  axios({
    method: 'delete',
    url: sessiondestroyURL,
    headers: {
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid'),
    },
  })
    .then((result) => {
      localStorage.clear();

      return result.status;
    })
    .catch((error: undefined) => error);

export const Fetchsessionvaildate = (): Promise<
  { data: CurrentUser } | undefined
> =>
  axios({
    method: 'get',
    url: sessionvaildateURL,
    headers: {
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid'),
    },
  })
    .then<{ data: CurrentUser }>(
      (result) => result.data as { data: CurrentUser },
    )
    .catch((error: undefined) => error);

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
