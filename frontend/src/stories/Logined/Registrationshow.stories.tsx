import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import App from 'App';
import { MemoryRouter } from 'react-router';
import AxiosMack from 'stories/app/Apimock';
import MockAdapter from 'axios-mock-adapter';
import { RegistrationShowURL } from 'urls/index';
import { Users } from 'mock/User';

export default {
  title: 'app/login',
  component: App,
} as Meta;

const mock = (apiMock: MockAdapter) => {
  apiMock.onGet(RegistrationShowURL('2')).reply(200, { data: Users[1] });
};

const Template: Story<ComponentProps<typeof App>> = () => (
  <RecoilRoot>
    <MemoryRouter initialEntries={['/registration/2']}>
      <AxiosMack mock={mock} logined>
        <App />
      </AxiosMack>
    </MemoryRouter>
  </RecoilRoot>
);

export const registrationshow = Template.bind({});
