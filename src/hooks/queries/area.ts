import areaApi from '@/apis/area';
import QUERY_KEY from '@/constants/queryKey';
import { AreaBasedListRequest } from '@/types/area';
import { SearchResponse } from '@/types/search';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

const useAreaCode = (areaCode?: string) => {
  return useQuery(
    [QUERY_KEY.AREA.CODE, areaCode],
    () => areaApi.getAreaCode(areaCode),
    {
      enabled: !!areaCode,
      select: (data: AxiosResponse) => {
        return data.data.response.body.items.item;
      },
    },
  );
};

const useAreaBasedList = ({
  areaCode,
  sigunguCode,
  pageNo,
}: AreaBasedListRequest) => {
  return useQuery(
    [QUERY_KEY.AREA.LIST, areaCode, sigunguCode, pageNo],
    () => areaApi.getAreaBasedList({ areaCode, sigunguCode, pageNo }),
    {
      suspense: true,
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

export { useAreaCode, useAreaBasedList };
