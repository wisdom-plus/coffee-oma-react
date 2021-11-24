import { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import App from 'App';
import { MemoryRouter } from 'react-router';
import AxiosMack from 'stories/app/Apimock';
import MockAdapter from 'axios-mock-adapter';
import { sessiondestroyURL } from 'urls/index';
import { CookiesProvider } from 'react-cookie';
import { QueryClientProvider, QueryClient } from 'react-query';

export default {
  title: 'app/Session/SignOut',
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

const mock = (SignedMock: MockAdapter) => {
  SignedMock.onDelete(sessiondestroyURL).reply(200);
};

const Template: Story<ComponentProps<typeof App>> = () => (
  <QueryClientProvider client={client}>
    <CookiesProvider>
      <RecoilRoot>
        <MemoryRouter initialEntries={['/sign_out']}>
          <AxiosMack mock={mock} logined>
            <App />
          </AxiosMack>
        </MemoryRouter>
      </RecoilRoot>
    </CookiesProvider>
  </QueryClientProvider>
);

export const signout = Template.bind({});
