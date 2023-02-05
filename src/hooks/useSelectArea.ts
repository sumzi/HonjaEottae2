import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function useSelectArea(): [
  string,
  string,
  string,
  (code: string, name: string) => void,
  (code: string, name: string) => void,
] {
  const [searchParams, setSearchParams] = useSearchParams();
  const [areaCode, setAreaCode] = useState(searchParams.get('areaCode') || '');
  const [sigunguCode, setSigunguCode] = useState(
    searchParams.get('sigunguCode') || '',
  );
  const [title, setTitle] = useState(searchParams.get('title') || '전체');

  const handleSelectArea = useCallback((code: string, name: string) => {
    setAreaCode(code);
    setSigunguCode('');
    setTitle(name);
    setSearchParams({ areaCode: code, title: name });
  }, []);

  const handleSelectSigungu = useCallback(
    (code: string, name: string) => {
      setSigunguCode(code);
      const areaName = title.split(' ')[0];
      setTitle(areaName + ' ' + name);
      setSearchParams({
        areaCode,
        sigunguCode: code,
        title: areaName + ' ' + name,
      });
    },
    [areaCode, title],
  );

  return [areaCode, sigunguCode, title, handleSelectArea, handleSelectSigungu];
}

export default useSelectArea;
