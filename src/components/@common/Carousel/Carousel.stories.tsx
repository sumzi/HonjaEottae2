import { ComponentMeta, ComponentStory } from '@storybook/react';

import Carousel from './Carousel';

export default {
  title: 'Components/@common/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = args => (
  <Carousel {...args}>
    <div>
      <img src="http://tong.visitkorea.or.kr/cms/resource/66/2716366_image2_1.jpg" />
    </div>
    <div>
      <img src="http://tong.visitkorea.or.kr/cms/resource/94/2711394_image2_1.jpg" />
    </div>
    <div>
      <img src="http://tong.visitkorea.or.kr/cms/resource/18/2716618_image2_1.jpg" />
    </div>
  </Carousel>
);

export const Default = Template.bind({});
Default.args = {};
