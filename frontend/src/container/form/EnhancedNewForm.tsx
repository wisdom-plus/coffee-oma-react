import { FC } from 'react';
import NewForm from 'components/organisms/NewForm';
import useNewForm from 'hooks/NewForm';
/* eslint-disable react/jsx-props-no-spreading */

const EnhancedNewform: FC = () => {
  const methods = useNewForm();

  return <NewForm {...methods} />;
};

export default EnhancedNewform;
