import { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import App from 'App';
import { MemoryRouter } from 'react-router';
import { CookiesProvider } from 'react-cookie';
import { QueryClientProvider, QueryClient } from 'react-query';

export default {
  title: 'app/other',
  component: App,
} as Meta;

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

const Template: Story<ComponentProps<typeof App>> = () => (
  <QueryClientProvider client={client}>
    <CookiesProvider>
      <RecoilRoot>
        <MemoryRouter initialEntries={['/private_policy']}>
          <App />
        </MemoryRouter>
      </RecoilRoot>
    </CookiesProvider>
  </QueryClientProvider>
);

export const privatepolicy = Template.bind({});
