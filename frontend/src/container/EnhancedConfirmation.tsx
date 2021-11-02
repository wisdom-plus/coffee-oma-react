import { FC } from 'react';
import Confirmation from 'components/molecules/Confirmation';
import useConfirmation from 'hooks/Confirmation';
/* eslint-disable react/jsx-props-no-spreading */

const EnhancedConfirmation: FC = () => {
  const methods = useConfirmation();

  return <Confirmation {...methods} />;
};

export default EnhancedConfirmation;
