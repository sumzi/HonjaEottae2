import { ComponentMeta, ComponentStory } from '@storybook/react';

import Skeleton from './Skeleton';

export default {
  title: 'Components/@common/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = args => (
  <Skeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  width: '40rem',
  height: '8rem',
};
