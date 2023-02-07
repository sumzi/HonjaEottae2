import { ComponentMeta, ComponentStory } from '@storybook/react';

import Content from './Content';

export default {
  title: 'Components/@common/Content',
  component: Content,
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = args => (
  <Content {...args}>
    <label>상세 정보</label>
    <p>
      광안리해수욕장은 부산광역시 수영구 광안2동에 있으며 해운대 해수욕장의
      서쪽에 위치하고 있다. 총면적 82,000㎡, 길이 1.4km, 사장폭은 25~110m의 질
      좋은 모래사장이 있고, 지속적인 수질 정화를 실시하여 인근의 수영강에 다시
      고기가 살 수 있을 정도로 깨끗한 수질을 자랑하며, 특히 젊은이들이 즐겨 찾는
      명소이다. 광안리에서는 해수욕뿐 아니라 독특한 분위기를 자아내는 레스토랑,
      카페 등과 시내 중심가 못지않은 유명 패션상가들이 즐비하며, 다양한
      먹을거리, 볼거리가 있어서 피서의 즐거움을 더해준다. 특히 밤이 되면
      광안대교의 아름다운 야경이 장관이다.
    </p>
  </Content>
);

export const Default = Template.bind({});
Default.args = {};
