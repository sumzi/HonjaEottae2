export interface SearchKeywordReponse {
  keyword: string;
}

export interface SearchKeywordResponse {
  cat1: string;
  contentid: string;
  contenttypeid: string;
  firstimage: string;
  title: string;
}

export interface SearchKeywordItemType {
  cat1?: string;
  contentId?: string;
  contentTypeId?: string;
  image: string;
  title: string;
}
