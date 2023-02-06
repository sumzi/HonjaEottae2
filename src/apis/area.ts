import { ITEM_SIZE } from '@/constants';
import { AreaBasedListRequest } from '@/types/area';
import client from './index';

const areaApi = {
  getAreaCode: (areaCode?: string) => {
    return client.get(
      `/areaCode?serviceKey=${process.env.REACT_APP_SERVICE_KEY}`,
      {
        params: {
          numOfRows: 20,
          areaCode,
        },
      },
    );
  },
  getAreaBasedList: ({
    areaCode,
    sigunguCode,
    pageNo,
  }: AreaBasedListRequest) => {
    return client.get(
      `/areaBasedList?serviceKey=${process.env.REACT_APP_SERVICE_KEY}`,
      {
        params: {
          areaCode,
          sigunguCode,
          pageNo,
          numOfRows: ITEM_SIZE,
        },
      },
    );
  },
};

export default areaApi;
