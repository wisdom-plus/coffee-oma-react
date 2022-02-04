import { FC } from 'react';
import RegistrationShow from 'components/templates/RegistrationShow';
import { useLocation } from 'react-router-dom';

const EnhacedRegistrationShow: FC = () => {
  const { pathname } = useLocation();

  return <RegistrationShow pathname={pathname} />;
};

export default EnhacedRegistrationShow;
