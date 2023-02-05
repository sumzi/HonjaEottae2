export interface AreaCodeType {
  rnum: number;
  name: string;
  code: string;
}

export interface AreaBasedListRequest {
  areaCode: string;
  sigunguCode: string;
}

export interface AreaProps {
  areaCode: string;
  sigunguCode: string;
  title?: string;
}

export interface AreaCodeProps extends AreaProps {
  handleSelectArea: (code: string, name: string) => void;
  handleSelectSigungu: (code: string, name: string) => void;
}
