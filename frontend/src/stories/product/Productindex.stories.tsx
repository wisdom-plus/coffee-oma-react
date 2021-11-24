import { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import App from 'App';
import { MemoryRouter } from 'react-router';
import AxiosMack from 'stories/app/Apimock';
import MockAdapter from 'axios-mock-adapter';
import { productindexURL } from 'urls/index';
import { products } from 'mock/product';
import { CookiesProvider } from 'react-cookie';
import { QueryClientProvider, QueryClient } from 'react-query';

export default {
  title: 'app/product',
  component: App,
} as Meta;

const Template: Story<ComponentProps<typeof App>> = () => {
  const mock = (apiMock: MockAdapter) => {
    apiMock.onGet(productindexURL).reply(200, { products });
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

  return (
    <QueryClientProvider client={client}>
      <CookiesProvider>
        <RecoilRoot>
          <MemoryRouter initialEntries={['/products']}>
            <AxiosMack mock={mock}>
              <App />
            </AxiosMack>
          </MemoryRouter>
        </RecoilRoot>
      </CookiesProvider>
    </QueryClientProvider>
  );
};

export const index = Template.bind({});
