import axios from 'axios';
import { PostOutput, UserForm } from 'model/index';
import { registrationnewURL } from '../urls/index';

export const Fetchregistrationnew = (
  user: UserForm,
): Promise<PostOutput | undefined> =>
  axios
    .post<PostOutput>(registrationnewURL, { user })
    .then<PostOutput>((result) => result.data)
    .catch((error: undefined) => error);

export default Fetchregistrationnew;
