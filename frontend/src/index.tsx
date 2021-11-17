import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import { CookiesProvider } from 'react-cookie';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      suspense: true,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <CookiesProvider>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </CookiesProvider>
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

reportWebVitals();
