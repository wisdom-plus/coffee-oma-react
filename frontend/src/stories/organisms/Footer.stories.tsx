import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Footer from '../../components/organisms/Footer';

export default {
  title: 'organisms',
  component: Footer,
  decorators: [StoryRouter()],
} as Meta;

const Template: Story<ComponentProps<typeof Footer>> = () => <Footer />;

export const Footers = Template.bind({});
