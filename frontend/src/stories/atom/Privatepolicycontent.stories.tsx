import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import Privatepolicycontent from '../../components/atoms/Privatepolicycontent';

export default {
  title: 'atom',
  component: Privatepolicycontent,
};
const Template: Story<ComponentProps<typeof Privatepolicycontent>> = () => (
  <Privatepolicycontent />
);

export const Privatepolicy = Template.bind({});
