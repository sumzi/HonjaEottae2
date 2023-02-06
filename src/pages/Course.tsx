import Layout from '@/components/@common/Layout/Layout';
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

  return (
    <Layout>
      <AreaCode
        areaCode={areaCode}
        sigunguCode={sigunguCode}
        handleClickArea={handleClickArea}
        handleClickSigungu={handleClickSigungu}
      />
      <CourseList
        areaCode={areaCode}
        sigunguCode={sigunguCode}
        pageNo={pageNo}
        title={title}
        handleClickPagination={handleClickPagination}
      />
    </Layout>
  );
}

export default Course;
