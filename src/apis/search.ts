import { ITEM_SIZE } from '@/constants';
import client from './index';

const searchApi = {
  getSearchKeyword: (keyword: string, pageNo: number) => {
    return client.get(`/searchKeyword?serviceKey=${process.env.SERVICE_KEY}`, {
      params: { keyword, pageNo, numOfRows: ITEM_SIZE },
    });
  },
};

export default searchApi;
