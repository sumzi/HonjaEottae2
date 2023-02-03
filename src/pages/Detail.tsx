import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/common/Layout/Layout';
import DetailCommon from '@/components/Detail/DetailCommon/DetailCommon';
import DetailIntro from '@/components/Detail/DetailIntro/DetailIntro';
import DetailImage from '@/components/Detail/DetailImage/DetailImage';
import DetailInfo from '@/components/Detail/DetailInfo/DetailInfo';

function Detail() {
  const [searchParams] = useSearchParams();

  const contentId = searchParams.get('contentId');
  const contentTypeId = searchParams.get('contentTypeId');
  const cat1 = searchParams.get('cat1');

  if (!contentId || !contentTypeId) {
    return <div></div>;
  }

  return (
    <Layout>
      <DetailCommon contentId={contentId} contentTypeId={contentTypeId} />
      <DetailIntro contentId={contentId} contentTypeId={contentTypeId} />
      {cat1 === 'C01' && (
        <DetailInfo contentId={contentId} contentTypeId={contentTypeId} />
      )}
      <DetailImage contentId={contentId} />
    </Layout>
  );
}

export default Detail;
