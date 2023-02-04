import { AreaBasedListRequest } from '@/types/area';
import client from './index';

const areaApi = {
  getAreaCode: (areaCode?: string) => {
    return client.get(`/areaCode?serviceKey=${process.env.SERVICE_KEY}`, {
      params: {
        numOfRows: 20,
        areaCode,
      },
    });
  },
  getAreaBasedList: ({ areaCode, sigunguCode }: AreaBasedListRequest) => {
    return client.get(`/areaBasedList?serviceKey=${process.env.SERVICE_KEY}`, {
      params: {
        areaCode,
        sigunguCode,
        numOfRows: 12,
      },
    });
  },
};

export default areaApi;
