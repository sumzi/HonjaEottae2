import detailApi from '@/apis/detail';
import QUERY_KEY from '@/constants/queryKey';
import {
  DetailImageResponse,
  DetailInfoResponse,
  DetailIntroType,
  DetailType,
} from '@/types/detail';
import getDetailIntroName from '@/utils/detailIntroItem';
import { useQueries, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

const useDetailCommon = ({ contentId, contentTypeId }: DetailType) => {
  return useQuery(
    [QUERY_KEY.DETAIL.COMMON, contentId, contentTypeId],
    () => detailApi.getDetailCommon({ contentId, contentTypeId }),
    {
      select: (data: AxiosResponse) => {
        const result = data.data.response.body.items.item[0];

        return {
          address: result.addr1,
          cat1: result.cat1,
          contentId: result.contentid,
          contentTypeId: result.contenttypeid,
          image: result.firstimage,
          mapX: Number(result.mapx),
          mapY: Number(result.mapy),
          overview: result.overview,
          title: result.title,
        };
      },
    },
  );
};

const useDetailInfo = ({ contentId, contentTypeId }: DetailType) => {
  return useQuery(
    [QUERY_KEY.DETAIL.INFO, contentId, contentTypeId],
    () => detailApi.getDetailInfo({ contentId, contentTypeId }),
    {
      select: (data: AxiosResponse) => {
        const result = data.data.response.body.items.item;
        const items = result.map(
          ({
            subcontentid,
            subdetailimg,
            subname,
            subdetailoverview,
            contentid,
            contenttypeid,
          }: DetailInfoResponse) => {
            return {
              contentId: contentid,
              contentTypeId: contenttypeid,
              id: subcontentid,
              name: subname,
              overview: subdetailoverview,
              image: subdetailimg,
            };
          },
        );
        return items;
      },
    },
  );
};

const useDetailIntro = ({ contentId, contentTypeId, cat1 }: DetailType) => {
  const result = useQueries({
    queries: [
      {
        queryKey: [QUERY_KEY.DETAIL.INTRO, contentId, contentTypeId],
        queryFn: () => detailApi.getDetailIntro({ contentId, contentTypeId }),
        select: (data: AxiosResponse) => {
          const result = data.data.response.body.items.item[0];
          const items = [];
          for (const key in result) {
            const value = result[key];
            if (
              key === 'contentid' ||
              key === 'contenttypeid' ||
              key === '' ||
              value === '0' ||
              value == ''
            )
              continue;
            const infoName = getDetailIntroName(key);
            const infoText: string = value;
            items.push({ infoName, infoText });
          }
          return items;
        },
      },
      {
        queryKey: [QUERY_KEY.DETAIL.INFO, contentId, contentTypeId],
        queryFn: () => detailApi.getDetailInfo({ contentId, contentTypeId }),
        select: (data: AxiosResponse) => {
          const result = data.data.response.body;
          if (cat1 === 'C01' || !result || result.totalCount === 0) return [];

          const items = result.items.item.map(
            ({ infoname, infotext }: DetailInfoResponse) => {
              return {
                infoName: infoname,
                infoText: infotext,
              };
            },
          );
          return items;
        },
      },
    ],
  });

  const data: DetailIntroType[] = [];
  result[0].data?.map(({ infoName, infoText }: DetailIntroType) => {
    if (infoName && infoText) data.push({ infoName, infoText });
  });
  result[1].data?.map(({ infoName, infoText }: DetailIntroType) => {
    if (infoName && infoText) data.push({ infoName, infoText });
  });
  return data;
};

const useDetailImage = (contentId: string) => {
  return useQuery(
    [QUERY_KEY.DETAIL.IMAGE, contentId],
    () => detailApi.getDetailImage(contentId),
    {
      select: (data: AxiosResponse) => {
        const result = data.data.response.body;
        if (result.totalCount === 0) {
          return null;
        }
        const items = result.items.item.map(
          ({ serialnum, originimgurl }: DetailImageResponse) => {
            return {
              imageNum: serialnum,
              imageUrl: originimgurl,
            };
          },
        );
        return items;
      },
    },
  );
};

export { useDetailCommon, useDetailInfo, useDetailIntro, useDetailImage };
