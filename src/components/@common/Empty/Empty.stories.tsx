import { ComponentMeta, ComponentStory, Story } from '@storybook/react';

import Empty from './Empty';

export default {
  title: 'Components/@common/Empty',
  component: Empty,
};

const Template: Story = args => <Empty {...args} />;

export const Default = Template.bind({});
Default.args = {};
