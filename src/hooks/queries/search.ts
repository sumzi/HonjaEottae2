import searchApi from '@/apis/search';
import QUERY_KEY from '@/constants/queryKey';
import { SearchResponse } from '@/types/search';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

const useSearchKeyword = (keyword: string, pageNo: number) => {
  return useQuery(
    [QUERY_KEY.KEYWORD, keyword, pageNo],
    () => searchApi.getSearchKeyword(keyword, pageNo),
    {
      select: (data: AxiosResponse) => {
        const result = data.data.response.body;
        if (result.totalCount === 0) {
          return {
            totalCount: 0,
            items: [],
          };
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
        return {
          totalCount: result.totalCount,
          items,
        };
      },
    },
  );
};

export default useSearchKeyword;
