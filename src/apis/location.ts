import { ITEM_SIZE } from '@/constants';
import client from './index';

const locationApi = {
  getLocationBasedList: (mapX: string, mapY: string) => {
    return client.get(
      `/locationBasedList?serviceKey=${process.env.SERVICE_KEY}`,
      {
        params: { mapX, mapY, numOfRows: ITEM_SIZE, radius: 2000 },
      },
    );
  },
};

export default locationApi;
