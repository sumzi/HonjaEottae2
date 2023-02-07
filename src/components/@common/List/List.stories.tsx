import { ComponentMeta, ComponentStory } from '@storybook/react';

import List from './List';

export default {
  title: 'Components/@common/List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = args => <List {...args}></List>;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      title: '오륙도',
      image:
        'http://tong.visitkorea.or.kr/cms/resource/85/2654785_image2_1.jpg',
    },
    {
      title: '해운대해수욕장',
      image:
        'http://tong.visitkorea.or.kr/cms/resource/46/2653346_image2_1.jpg',
    },
    {
      title: '해운대 동백섬',
      image:
        'http://tong.visitkorea.or.kr/cms/resource/56/2653356_image2_1.jpg',
    },
  ],
};
