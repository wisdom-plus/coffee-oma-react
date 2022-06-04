import { FC } from 'react';
import { Message } from 'semantic-ui-react';

export type LocationState = {
  message: string;
  type: 'success' | 'error';
  state?: boolean;
  dismiss?: () => void;
};

const FlashMessage: FC<LocationState> = ({
  message = 'エラーが発生しました。',
  type = 'error',
  state = false,
  dismiss = () => undefined,
}) => (
  <div>
    {state &&
      (type === 'success' ? (
        <Message success onDismiss={dismiss}>
          <Message.Header
            data-testid="success"
            className="ui center aligned"
            content={message}
          />
        </Message>
      ) : (
        <Message error onDismiss={dismiss}>
          <Message.Header
            data-testid="error"
            className="ui center aligned"
            content={message}
          />
        </Message>
      ))}
  </div>
);

export default FlashMessage;
