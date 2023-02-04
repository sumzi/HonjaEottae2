export interface SearchKeywordReponse {
  keyword: string;
}

export interface SearchResponse {
  cat1: string;
  contentid: string;
  contenttypeid: string;
  firstimage: string;
  title: string;
}

export interface SearchItemType {
  cat1?: string;
  contentId?: string;
  contentTypeId?: string;
  image: string;
  title: string;
}
