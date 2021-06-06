import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import Policycontent from '../../components/atoms/Policycontent';

export default {
  title: 'atom',
  component: Policycontent,
};
const Template: Story<ComponentProps<typeof Policycontent>> = () => (
  <Policycontent />
);

export const Policy = Template.bind({});
