import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { useAreaCode } from '@/hooks/queries/area';
import { AreaCodeType } from '@/types/area';
import { areaState } from '@/recoil/atom';

function useSelectArea(): [
  string,
  string,
  AreaCodeType[],
  (code: string, name: string) => void,
  (code: string, name: string) => void,
] {
  const [area, setArea] = useRecoilState(areaState);
  const { data: sigunguCodeItem } = useAreaCode(area.areaCode);

  const handleSelectArea = useCallback((code: string, name: string) => {
    setArea(oldArea => {
      return { ...oldArea, areaCode: code, sigunguCode: '', title: name };
    });
  }, []);

  const handleSelectSigungu = useCallback((code: string, name: string) => {
    setArea(oldArea => {
      return {
        ...oldArea,
        sigunguCode: code,
        title: oldArea.title + ' ' + name,
      };
    });
  }, []);

  return [
    area.areaCode,
    area.sigunguCode,
    sigunguCodeItem,
    handleSelectArea,
    handleSelectSigungu,
  ];
}

export default useSelectArea;
