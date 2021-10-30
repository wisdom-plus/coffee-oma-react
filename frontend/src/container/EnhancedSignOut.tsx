import { FC } from 'react';
import useSignout from 'hooks/SignOut';
import SignOut from 'components/atoms/SignOut';

const EnhancedSignOut: FC = () => {
  const state = useSignout();

  return <SignOut logout={state.logout} />;
};

export default EnhancedSignOut;
