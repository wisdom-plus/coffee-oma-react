import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import App from 'App';
import { MemoryRouter } from 'react-router';
import AxiosMack from 'stories/app/Apimock';
import MockAdapter from 'axios-mock-adapter';
import { sessiondestroyURL } from 'urls/index';

export default {
  title: 'app/session',
  component: App,
} as Meta;

const mock = (SignedMock: MockAdapter) => {
  SignedMock.onDelete(sessiondestroyURL).reply(200);
};

const Template: Story<ComponentProps<typeof App>> = () => (
  <RecoilRoot>
    <MemoryRouter initialEntries={['/sign_out']}>
      <AxiosMack mock={mock} logined>
        <App />
      </AxiosMack>
    </MemoryRouter>
  </RecoilRoot>
);

export const signout = Template.bind({});
