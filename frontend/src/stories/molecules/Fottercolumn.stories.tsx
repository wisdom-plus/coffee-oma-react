import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Footercolumn from '../../components/molecules/Footercolumn';

export default {
  title: 'molecules',
  component: Footercolumn,
  decorators: [StoryRouter()],
} as Meta;

const Template: Story<ComponentProps<typeof Footercolumn>> = () => (
  <Footercolumn />
);

export const Footercolumns = Template.bind({});
