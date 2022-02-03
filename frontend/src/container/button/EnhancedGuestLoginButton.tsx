import { FC } from 'react';
import GuestLoginButton from 'components/atoms/GuestLoginButton';
import useGuestLoginButton from 'hooks/effect/GuestLoginButton';

const EnhancedGuestLoginButton: FC = () => {
  const onLogin = useGuestLoginButton();

  return <GuestLoginButton onLogin={onLogin} />;
};

export default EnhancedGuestLoginButton;
