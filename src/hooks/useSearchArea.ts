import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

function useSearchArea(): [
  string,
  string,
  string,
  number,
  (code: string, name: string) => void,
  (code: string, name: string) => void,
  (no: number) => void,
] {
  const [searchParams, setSearchParams] = useSearchParams();
  const areaCode = searchParams.get('areaCode') || '';
  const sigunguCode = searchParams.get('sigunguCode') || '';
  const title = searchParams.get('title') || '전체';
  const pageNo = Number(searchParams.get('pageNo')) || 1;

  const handleClickArea = useCallback((code: string, name: string) => {
    setSearchParams({ areaCode: code, title: name, pageNo: '1' });
  }, []);

  const handleClickSigungu = useCallback(
    (code: string, name: string) => {
      const areaName = title.split(' ')[0];
      setSearchParams({
        areaCode,
        sigunguCode: code,
        title: areaName + ' ' + name,
        pageNo: '1',
      });
    },
    [areaCode, title],
  );

  const handleClickPagination = useCallback((no: number) => {
    setSearchParams({ areaCode, sigunguCode, title, pageNo: String(no) });
  }, []);

  return [
    areaCode,
    sigunguCode,
    title,
    pageNo,
    handleClickArea,
    handleClickSigungu,
    handleClickPagination,
  ];
}

export default useSearchArea;
