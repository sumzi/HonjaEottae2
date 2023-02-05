import { CourseBasedListRequest } from '@/types/course';
import client from './index';

const courseApi = {
  getCourseBasedList: ({ areaCode, sigunguCode }: CourseBasedListRequest) => {
    return client.get(`/areaBasedList?serviceKey=${process.env.SERVICE_KEY}`, {
      params: {
        numOfRows: 12,
        cat1: 'C01',
        areaCode,
        sigunguCode,
      },
    });
  },
};

export default courseApi;
