import Content from '@/components/@common/Content/Content';
import Skeleton from '@/components/@common/Skeleton/Skeleton';

function DetailIntroFallback() {
  return (
    <Content>
      <Skeleton width="100%" />
      <Skeleton width="100%" />
      <Skeleton width="80%" />
    </Content>
  );
}

export default DetailIntroFallback;
