import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import CaptionColumn from '../../components/atoms/CaptionColumn';

export default {
  title: 'atom',
  component: CaptionColumn,
};
const Template: Story<ComponentProps<typeof CaptionColumn>> = () => (
  <CaptionColumn caption="これはテストです" />
);

export const CaptionColumns = Template.bind({});
