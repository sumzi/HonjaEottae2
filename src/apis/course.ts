import { ITEM_SIZE } from '@/constants';
import { CourseBasedListRequest } from '@/types/course';
import client from './index';

const courseApi = {
  getCourseBasedList: ({
    areaCode,
    sigunguCode,
    pageNo,
  }: CourseBasedListRequest) => {
    return client.get(`/areaBasedList?serviceKey=${process.env.SERVICE_KEY}`, {
      params: {
        numOfRows: ITEM_SIZE,
        cat1: 'C01',
        areaCode,
        sigunguCode,
        pageNo,
      },
    });
  },
};

export default courseApi;
