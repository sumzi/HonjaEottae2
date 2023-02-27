import { Suspense, useEffect } from 'react';
import Layout from '@/components/@common/Layout/Layout';
import ListFallback from '@/components/@common/List/List.fallback';
import AreaCode from '@/components/Area/AreaCode/AreaCode';
import CourseList from '@/components/Course/CourseList/CourseList';
import useSearchArea from '@/hooks/useSearchArea';

function Course() {
  const [
    areaCode,
    sigunguCode,
    title,
    pageNo,
    handleClickArea,
    handleClickSigungu,
    handleClickPagination,
  ] = useSearchArea();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNo]);

  return (
    <Layout>
      <AreaCode
        areaCode={areaCode}
        sigunguCode={sigunguCode}
        handleClickArea={handleClickArea}
        handleClickSigungu={handleClickSigungu}
      />
      <Suspense fallback={<ListFallback />}>
        <CourseList
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

export default Course;
