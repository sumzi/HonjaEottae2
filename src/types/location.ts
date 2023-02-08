export interface LocationBasedListResponse {
  mapx: string;
  mapy: string;
  dist: string;
  title: string;
  contentid: string;
  contenttypeid: string;
  firstimage: string;
  cat1: string;
}

export interface LocationBasedListType {
  mapX: number;
  mapY: number;
  dist: string;
  title: string;
  contentId: string;
  contentTypeId: string;
  image: string;
  cat1: string;
}

export interface KaKaoMapType {
  mapX: number;
  mapY: number;
  data: LocationBasedListType[] | null;
}
