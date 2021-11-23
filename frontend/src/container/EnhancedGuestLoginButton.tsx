import { FC } from 'react';
import GuestLoginButton from 'components/atoms/GuestLoginButton';
import useGuestLoginButton from 'hooks/GuestLoginButton';

const EnhancedGuestLoginButton: FC = () => {
  const onLogin = useGuestLoginButton();

  return <GuestLoginButton onLogin={onLogin} />;
};

export default EnhancedGuestLoginButton;
