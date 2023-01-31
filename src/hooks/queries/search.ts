import searchApi from '@/apis/search';
import queryKey from '@/constants/queryKey';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

const useSearchKeyword = (keyword?: string) => {
  return useQuery([queryKey.KEYWORD], () => searchApi.searchKeyword(keyword), {
    retry: 0,
    enabled: !!keyword,
    select: (data: AxiosResponse) => {
      const result = data.data.response.body;
      const items = result.items.item.map((data: any) => {
        return {
          contentId: data.contentid,
          contentTypeId: data.contenttypeid,
          image: data.firstimage,
          title: data.title,
        };
      });
      return {
        totalCount: result.totalCount,
        items,
      };
    },
  });
};

export default useSearchKeyword;
