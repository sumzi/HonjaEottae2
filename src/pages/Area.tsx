import AreaCode from '@/components/Area/AreaCode/AreaCode';
import AreaList from '@/components/Area/AreaList/AreaList';
import Layout from '@/components/@common/Layout/Layout';
import useSelectArea from '@/hooks/useSelectArea';

function Area() {
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
      <AreaList areaCode={areaCode} sigunguCode={sigunguCode} title={title} />
    </Layout>
  );
}

export default Area;
