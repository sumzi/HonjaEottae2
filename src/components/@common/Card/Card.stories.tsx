import { ComponentMeta, ComponentStory } from '@storybook/react';

import Card from './Card';

export default {
  title: 'Components/@common/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  image:
    'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQv2PmaiSk55n5gqpALEYco4zPoupXhZ-IhiOvTIeglbNJPxCqjunnmisH6w_Vuaur4',
  title: '광안리',
};
export const NoImage = Template.bind({});
NoImage.args = {
  image: '',
  title: '서울 바다',
};
