import axios from 'axios';
import { Session, Token } from 'model/index';
import { sessionnewURL } from '../urls/index';

export const Fetchsessionnew = (session: Session): Promise<Token | undefined> =>
  axios
    .post<Token>(sessionnewURL, { ...session })
    .then<Token>((result) => result.headers as Token)
    .catch((error: undefined) => error);

export default Fetchsessionnew;
