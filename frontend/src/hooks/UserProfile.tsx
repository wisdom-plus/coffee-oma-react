import { useParams } from 'react-router-dom';
import { CurrentUser } from 'model/index';
import { FetchRegistrationShow } from 'apis/User';
import { useRecoilValue } from 'recoil';
import LoginState from 'Atom';
import { useQuery } from 'react-query';

const useUserProfile = (): { user: CurrentUser; currentuser: CurrentUser } => {
  const { id } = useParams() as { id: string };
  const currentuser = useRecoilValue(LoginState);
  const { data: user = {} as CurrentUser } = useQuery([id, 'user'], () =>
    FetchRegistrationShow(id),
  );

  return { user, currentuser };
};

export default useUserProfile;
