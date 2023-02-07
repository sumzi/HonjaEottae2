import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/@common/Button',
  component: Button,
  argType: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  children: '기본 버튼',
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
  children: '기본 버튼',
};
export const Small = Template.bind({});
Small.args = {
  variant: 'primary',
  size: 'small',
  children: '기본 버튼',
};
export const Medium = Template.bind({});
Medium.args = {
  variant: 'primary',
  size: 'medium',
  children: '기본 버튼',
};
export const Large = Template.bind({});
Large.args = {
  variant: 'primary',
  size: 'large',
  children: '기본 버튼',
};
