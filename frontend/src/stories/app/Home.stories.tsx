import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router';
import App from 'App';

export default {
  title: 'app/home',
  component: App,
} as Meta;

const Template: Story<ComponentProps<typeof App>> = () => (
  <RecoilRoot>
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  </RecoilRoot>
);

export const home = Template.bind({});
