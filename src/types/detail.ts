export interface DetailType {
  contentId: string;
  contentTypeId?: string;
}

export interface LocationType {
  mapX: number;
  mapY: number;
}

export interface DetailIntroType {
  infoName: string;
  infoText: string;
}

export interface DetailInfoResponse {
  infoname: string;
  infotext: string;
}

export interface DetailImageResponse {
  serialnum: string;
  originimgurl: string;
}

export interface DetailImageType {
  imageNum: string;
  imageUrl: string;
}

export interface DetailInfoResponse {
  contentid: string;
  contenttypeid: string;
  subcontentid: string;
  subname: string;
  subdetailoverview: string;
  subdetailimg: string;
}

export interface DetailInfoType {
  contentId: string;
  contentTypeId: string;
  id: string;
  name: string;
  overview: string;
  image: string;
}
