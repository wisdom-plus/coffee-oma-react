import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import FormMessage from '../../components/atoms/FormMessage';

export default {
  title: 'atom',
  component: FormMessage,
  decorators: [StoryRouter()],
  parameters: {
    props: {
      values: [
        { issignin: true },
        { isconfirm: true },
        { issignin: true },
        { isreset: true },
      ],
    },
  },
} as Meta;
const Template: Story<ComponentProps<typeof FormMessage>> = () => (
  <FormMessage />
);

export const FormMessages = Template.bind({});
