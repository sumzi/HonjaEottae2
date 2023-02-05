import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import courseApi from '@/apis/course';
import QUERY_KEY from '@/constants/queryKey';
import { CourseBasedListRequest } from '@/types/course';
import { SearchResponse } from '@/types/search';

const useCourseBasedList = ({
  areaCode,
  sigunguCode,
}: CourseBasedListRequest) => {
  return useQuery(
    [QUERY_KEY.COURSE.LIST, areaCode, sigunguCode],
    () => courseApi.getCourseBasedList({ areaCode, sigunguCode }),
    {
      select: (data: AxiosResponse) => {
        const result = data.data.response.body;
        if (result.totalCount === 0) {
          return { totalCount: 0, items: [] };
        }
        const items = result.items.item.map(
          ({
            contentid,
            contenttypeid,
            firstimage,
            title,
            cat1,
          }: SearchResponse) => {
            return {
              cat1: cat1,
              contentId: contentid,
              contentTypeId: contenttypeid,
              image: firstimage,
              title: title,
            };
          },
        );
        return { totalCount: result.totalCount, items };
      },
    },
  );
};

export { useCourseBasedList };
