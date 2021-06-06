import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Footerlist from '../../components/atoms/Footerlist';

export default {
  title: 'atom',
  component: Footerlist,
  decorators: [StoryRouter()],
};
const Template: Story<ComponentProps<typeof Footerlist>> = ({ links }) => (
  <Footerlist links={links} />
);

export const Footerlists = Template.bind({});

Footerlists.args = {
  links: [
    {
      id: 1,
      content: 'トップページ',
      url: '/',
    },
    {
      id: 2,
      content: 'プライベートポリシー',
      url: '/private_policy',
    },
    {
      id: 3,
      content: '利用規約',
      url: 'policy',
    },
    {
      id: 4,
      content: 'お問い合わせ',
      url: '/contact/new',
    },
  ],
};
