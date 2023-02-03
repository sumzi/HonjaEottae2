import client from './index';

const searchApi = {
  getSearchKeyword: (keyword: string) => {
    return client.get(`/searchKeyword?serviceKey=${process.env.SERVICE_KEY}`, {
      params: { keyword, numOfRows: 12 },
    });
  },
};

export default searchApi;
