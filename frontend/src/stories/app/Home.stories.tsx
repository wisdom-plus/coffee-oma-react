import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router';
import App from 'App';
import AxiosMack from 'stories/app/Apimock';
import MockAdapter from 'axios-mock-adapter';
import { productindexURL } from 'urls/index';
import { products } from 'mock/product';

export default {
  title: 'app/home',
  component: App,
} as Meta;

const mock = (apiMock: MockAdapter) => {
  apiMock.onGet(productindexURL).reply(200, { products });
};

const Template: Story<ComponentProps<typeof App>> = () => (
  <RecoilRoot>
    <MemoryRouter initialEntries={['/']}>
      <AxiosMack mock={mock}>
        <App />
      </AxiosMack>
    </MemoryRouter>
  </RecoilRoot>
);

export const home = Template.bind({});
