import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/@common/Layout/Layout';
import DetailCommon from '@/components/Detail/DetailCommon/DetailCommon';
import DetailIntro from '@/components/Detail/DetailIntro/DetailIntro';
import DetailImage from '@/components/Detail/DetailImage/DetailImage';
import DetailInfo from '@/components/Detail/DetailInfo/DetailInfo';
import DetailCommonFallback from '@/components/Detail/DetailCommon/DetailCommon.fallback';
import DetailIntroFallback from '@/components/Detail/DetailIntro/DetailIntro.fallback';
import DetailImageFallback from '@/components/Detail/DetailImage/DetailImage.fallback';
import DetailInfoFallback from '@/components/Detail/DetailInfo/DetailInfo.fallback';

function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchParams] = useSearchParams();

  const contentId = searchParams.get('contentId');
  const contentTypeId = searchParams.get('contentTypeId');
  const cat1 = searchParams.get('cat1');

  if (!contentId || !contentTypeId || !cat1) {
    return <div></div>;
  }

  return (
    <Layout>
      <Suspense fallback={<DetailCommonFallback />}>
        <DetailCommon contentId={contentId} contentTypeId={contentTypeId} />
      </Suspense>

      <Suspense fallback={<DetailIntroFallback />}>
        <DetailIntro
          contentId={contentId}
          contentTypeId={contentTypeId}
          cat1={cat1}
        />
      </Suspense>

      {cat1 === 'C01' && (
        <Suspense fallback={<DetailInfoFallback />}>
          <DetailInfo contentId={contentId} contentTypeId={contentTypeId} />
        </Suspense>
      )}

      {cat1 !== 'C01' && (
        <Suspense fallback={<DetailImageFallback />}>
          <DetailImage contentId={contentId} />
        </Suspense>
      )}
    </Layout>
  );
}

export default Detail;
