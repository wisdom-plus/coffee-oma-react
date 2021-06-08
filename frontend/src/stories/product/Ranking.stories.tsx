import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import App from 'App';
import { MemoryRouter } from 'react-router';
import AxiosMack from 'stories/app/Apimock';
import MockAdapter from 'axios-mock-adapter';
import { LikeIndexURL } from 'urls/index';
import { products } from 'mock/product';

export default {
  title: 'app/product',
  component: App,
} as Meta;

const mock = (apiMock: MockAdapter) => {
  apiMock.onGet(LikeIndexURL).reply(200, { likes: products });
};

const Template: Story<ComponentProps<typeof App>> = () => (
  <RecoilRoot>
    <MemoryRouter initialEntries={['/product/ranking']}>
      <AxiosMack mock={mock}>
        <App />
      </AxiosMack>
    </MemoryRouter>
  </RecoilRoot>
);

export const rank = Template.bind({});
