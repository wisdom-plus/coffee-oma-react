import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
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
const container = document.getElementById('root');
const root = createRoot(container!); //eslint-disable-line

root.render(
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
);

reportWebVitals();
