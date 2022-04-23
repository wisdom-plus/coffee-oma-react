import { ErrorInfo, PureComponent, ReactNode } from 'react';
import { AxiosError } from 'axios';
import ErrorMessage from 'error/ErrorMessage';

type StatusMessages = { [status: number]: string };
type Props = { statusMessages?: StatusMessages; children: JSX.Element };
type State = { hasError: boolean; error: Error | null };
const DERAULT_MESSAGE: StatusMessages = { 0: 'サーバーエラーが発生しました。' };

class ErrorBoundary extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError = (error: Error): State => ({
    hasError: true,
    error,
  });

  componentDidCatch = (error: Error, info: ErrorInfo): void => {
    console.error(error, info); // eslint-disable-line no-console
  };

  render = (): ReactNode => {
    const { children, statusMessages = {} } = this.props;
    const { hasError, error } = this.state;
    const messages = { ...DERAULT_MESSAGE, ...statusMessages };

    if (hasError) {
      const statusCode = (error as AxiosError)?.response?.status;

      if (statusCode && Object.keys(messages).includes(String(statusCode))) {
        return <ErrorMessage message={messages[statusCode]} />;
      }

      return <ErrorMessage message={messages[0]} />;
    }

    return children;
  };
}
export default ErrorBoundary;
