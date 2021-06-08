import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import App from 'App';
import { MemoryRouter } from 'react-router';
import AxiosMack from 'stories/app/Apimock';
import MockAdapter from 'axios-mock-adapter';
import { sessionvalidateURL } from 'urls/index';
import { currentuser } from 'mock/User';

export default {
  title: 'app/registration',
  component: App,
} as Meta;

const mock = (apiMock: MockAdapter) => {
  apiMock.onGet(sessionvalidateURL).reply(200, { data: currentuser });
};

const Template: Story<ComponentProps<typeof App>> = () => (
  <RecoilRoot>
    <MemoryRouter initialEntries={['/mypage']}>
      <AxiosMack mock={mock}>
        <App />
      </AxiosMack>
    </MemoryRouter>
  </RecoilRoot>
);

export const mypage = Template.bind({});
