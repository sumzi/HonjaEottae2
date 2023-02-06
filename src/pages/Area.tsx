import { Suspense } from 'react';
import AreaCode from '@/components/Area/AreaCode/AreaCode';
import AreaList from '@/components/Area/AreaList/AreaList';
import Layout from '@/components/@common/Layout/Layout';
import useSearchArea from '@/hooks/useSearchArea';
import ListFallback from '@/components/@common/List/List.fallback';

function Area() {
  const [
    areaCode,
    sigunguCode,
    title,
    pageNo,
    handleClickArea,
    handleClickSigungu,
    handleClickPagination,
  ] = useSearchArea();

  return (
    <Layout>
      <AreaCode
        areaCode={areaCode}
        sigunguCode={sigunguCode}
        handleClickArea={handleClickArea}
        handleClickSigungu={handleClickSigungu}
      />
      <Suspense fallback={<ListFallback />}>
        <AreaList
          areaCode={areaCode}
          sigunguCode={sigunguCode}
          pageNo={pageNo}
          title={title}
          handleClickPagination={handleClickPagination}
        />
      </Suspense>
    </Layout>
  );
}

export default Area;
