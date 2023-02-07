import { ComponentMeta, ComponentStory } from '@storybook/react';

import Title from './Title';

export default {
  title: 'Components/@common/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = args => (
  <Title {...args}>
    <h1>
      <label>검색어</label> : 바다
    </h1>
    <p>총 게시물 100개</p>
  </Title>
);

export const Default = Template.bind({});
Default.args = {};
