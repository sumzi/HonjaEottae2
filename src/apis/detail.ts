import client from './index';
import { DetailType } from '@/types/detail';

const detailApi = {
  getDetailCommon: ({ contentId, contentTypeId }: DetailType) => {
    return client.get(
      `/detailCommon?serviceKey=${process.env.REACT_APP_SERVICE_KEY}`,
      {
        params: {
          contentId,
          contentTypeId,
          defaultYN: 'Y',
          catcodeYN: 'Y',
          firstImageYN: 'Y',
          addrinfoYN: 'Y',
          mapinfoYN: 'Y',
          overviewYN: 'Y',
        },
      },
    );
  },
  getDetailInfo: ({ contentId, contentTypeId }: DetailType) => {
    return client.get(
      `/detailInfo?serviceKey=${process.env.REACT_APP_SERVICE_KEY}`,
      {
        params: {
          contentId,
          contentTypeId,
        },
      },
    );
  },
  getDetailIntro: ({ contentId, contentTypeId }: DetailType) => {
    return client.get(
      `/detailIntro?serviceKey=${process.env.REACT_APP_SERVICE_KEY}`,
      {
        params: {
          contentId,
          contentTypeId,
        },
      },
    );
  },
  getDetailImage: (contentId: string) => {
    return client.get(
      `/detailImage?serviceKey=${process.env.REACT_APP_SERVICE_KEY}`,
      {
        params: {
          contentId,
          imageYN: 'Y',
          subImageYN: 'Y',
        },
      },
    );
  },
};

export default detailApi;
