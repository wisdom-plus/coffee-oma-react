import { FC, useState } from 'react';
import FlashMessage, { LocationState } from 'components/atoms/FlashMessage';

const EnhancedMessage: FC<LocationState> = ({ message, type }) => {
  const [state, setState] = useState(true);
  const dismiss = () => setState(() => false);

  return (
    <FlashMessage
      message={message}
      type={type}
      state={state}
      dismiss={dismiss}
    />
  );
};

export default EnhancedMessage;
