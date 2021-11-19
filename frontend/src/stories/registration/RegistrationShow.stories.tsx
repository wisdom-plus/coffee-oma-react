import { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import App from 'App';
import { MemoryRouter } from 'react-router';
import AxiosMack from 'stories/app/Apimock';
import MockAdapter from 'axios-mock-adapter';
import { RegistrationShowURL } from 'urls/index';
import { Users } from 'mock/User';
import { CookiesProvider } from 'react-cookie';
import { QueryClientProvider, QueryClient } from 'react-query';

export default {
  title: 'app/registration',
  component: App,
} as Meta;

const mock = (apiMock: MockAdapter) => {
  apiMock.onGet(RegistrationShowURL('2')).reply(200, { data: Users[1] });
};

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
        <MemoryRouter initialEntries={['/registration/2']}>
          <AxiosMack mock={mock}>
            <App />
          </AxiosMack>
        </MemoryRouter>
      </RecoilRoot>
    </CookiesProvider>
  </QueryClientProvider>
);

export const show = Template.bind({});
