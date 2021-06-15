import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import App from 'App';
import { MemoryRouter } from 'react-router';
import AxiosMack from 'stories/app/Apimock';
import MockAdapter from 'axios-mock-adapter';
import { productshowURL } from 'urls/index';
import { products } from 'mock/product';

export default {
  title: 'app/login',
  component: App,
} as Meta;

const mock = (apiMock: MockAdapter) => {
  apiMock.onGet(productshowURL('1')).reply(200, { product: products[0] });
};

const Template: Story<ComponentProps<typeof App>> = () => (
  <RecoilRoot>
    <MemoryRouter initialEntries={['/product/1']}>
      <AxiosMack mock={mock} like logined>
        <App />
      </AxiosMack>
    </MemoryRouter>
  </RecoilRoot>
);

export const productshow = Template.bind({});
