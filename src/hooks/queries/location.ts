import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import locationApi from '@/apis/location';
import QUERY_KEY from '@/constants/queryKey';
import { LocationBasedListResponse } from '@/types/location';

const useLocationBasedList = (mapX: string, mapY: string) => {
  return useQuery(
    [QUERY_KEY.KEYWORD, mapX, mapY],
    () => locationApi.getLocationBasedList(mapY, mapX),
    {
      suspense: true,
      enabled: !!mapX && !!mapY,
      select: (data: AxiosResponse) => {
        const result = data.data.response.body;
        if (result.totalCount === 0) {
          return {
            totalCount: 0,
            items: null,
          };
        }
        const items = result.items.item.map(
          ({
            contentid,
            contenttypeid,
            firstimage,
            title,
            cat1,
            mapx,
            mapy,
            dist,
          }: LocationBasedListResponse) => {
            return {
              cat1: cat1,
              contentId: contentid,
              contentTypeId: contenttypeid,
              image: firstimage,
              title: title,
              mapX: Number(mapy),
              mapY: Number(mapx),
              dist: dist,
            };
          },
        );
        return {
          totalCount: result.totalCount,
          items,
        };
      },
    },
  );
};

export default useLocationBasedList;
