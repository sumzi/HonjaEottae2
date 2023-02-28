import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import locationApi from '@/apis/location';
import QUERY_KEY from '@/constants/queryKey';
import { LocationBasedListResponse } from '@/types/location';
import { ITEM_SIZE } from '@/constants';

const useLocationBasedList = (mapX: string, mapY: string) => {
  const filterData = (data: InfiniteData<AxiosResponse>) => {
    const pages = data.pages.map(page => {
      const result = page.data.response.body;
      return {
        totalCount: result.totalCount,
        items: result.items.item.map(
          ({
            contentid,
            contenttypeid,
            firstimage,
            cat1,
            mapx,
            mapy,
            title,
            dist,
          }: LocationBasedListResponse) => ({
            cat1: cat1,
            contentId: contentid,
            contentTypeId: contenttypeid,
            image: firstimage,
            title: title,
            mapX: Number(mapy),
            mapY: Number(mapx),
            dist: dist,
          }),
        ),
      };
    });

    return { ...data, pages };
  };

  return useInfiniteQuery(
    [QUERY_KEY.LOCATION.LIST, mapX, mapY],
    ({ pageParam = 1 }) =>
      locationApi.getLocationBasedList(mapY, mapX, pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        const totalCount = lastPage.data.response.body.totalCount;
        const n: number = pages.length;
        return Math.ceil(totalCount / ITEM_SIZE) > n ? n + 1 : undefined;
      },
      suspense: true,
      enabled: !!mapX && !!mapY,
      select: filterData,
    },
  );
};

export { useLocationBasedList };
