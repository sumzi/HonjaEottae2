import Layout from '@/components/@common/Layout/Layout';
import AreaCode from '@/components/Area/AreaCode/AreaCode';
import CourseList from '@/components/Course/CourseList/CourseList';
import useSelectArea from '@/hooks/useSelectArea';

function Course() {
  const [areaCode, sigunguCode, title, handleSelectArea, handleSelectSigungu] =
    useSelectArea();
  return (
    <Layout>
      <AreaCode
        areaCode={areaCode}
        sigunguCode={sigunguCode}
        handleSelectArea={handleSelectArea}
        handleSelectSigungu={handleSelectSigungu}
      />
      <CourseList areaCode={areaCode} sigunguCode={sigunguCode} title={title} />
    </Layout>
  );
}

export default Course;
