import axios from 'axios';
import { Session, Token } from 'model/index';
import { sessionnewURL, sessiondestroyURL } from '../urls/index';

export const Fetchsessionnew = (session: Session): Promise<Token | undefined> =>
  axios
    .post<Token>(sessionnewURL, { ...session })
    .then<Token>((result) => result.headers as Token)
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
export default Fetchsessionnew;
