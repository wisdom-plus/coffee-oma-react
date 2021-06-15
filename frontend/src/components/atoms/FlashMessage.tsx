import { FC, useState } from 'react';
import { Message } from 'semantic-ui-react';

export type LocationState = {
  message: string;
  type: 'success' | 'error';
};

const FlashMessage: FC<LocationState> = ({ message, type }) => {
  const [state, setState] = useState(true);

  return (
    <>
      {state &&
        (type === 'success' ? (
          <Message success onDismiss={() => setState(() => false)}>
            <Message.Header
              data-testid="success"
              className="ui center aligned"
              content={message}
            />
          </Message>
        ) : (
          <Message error onDismiss={() => setState(() => false)}>
            <Message.Header
              data-testid="error"
              className="ui center aligned"
              content={message}
            />
          </Message>
        ))}
    </>
  );
};

export default FlashMessage;
