import { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import App from 'App';
import { MemoryRouter } from 'react-router';

export default {
  title: 'app/session',
  component: App,
} as Meta;

const Template: Story<ComponentProps<typeof App>> = () => (
  <RecoilRoot>
    <MemoryRouter initialEntries={['/sign_up']}>
      <App />
    </MemoryRouter>
  </RecoilRoot>
);

export const signup = Template.bind({});
