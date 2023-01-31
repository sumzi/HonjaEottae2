import client from './index';

const searchApi = {
  searchKeyword: (keyword?: string) => {
    return client.get(`/searchKeyword?serviceKey=${process.env.SERVICE_KEY}`, {
      params: { keyword, numOfRows: 12 },
    });
  },
};

export default searchApi;
