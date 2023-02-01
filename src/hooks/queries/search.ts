import searchApi from '@/apis/search';
import queryKey from '@/constants/queryKey';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

interface SearchKeywordResponse {
  contentid: string;
  contenttypeid: string;
  firstimage: string;
  title: string;
}

const useSearchKeyword = (keyword: string) => {
  return useQuery([queryKey.KEYWORD], () => searchApi.searchKeyword(keyword), {
    retry: 0,
    enabled: !!keyword,
    select: (data: AxiosResponse) => {
      const result = data.data.response.body;
      const items = result.items.item.map(
        ({
          contentid,
          contenttypeid,
          firstimage,
          title,
        }: SearchKeywordResponse) => {
          return {
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
  });
};

export default useSearchKeyword;
