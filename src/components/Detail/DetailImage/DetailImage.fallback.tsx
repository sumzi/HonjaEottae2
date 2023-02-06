import Content from '@/components/@common/Content/Content';
import Skeleton from '@/components/@common/Skeleton/Skeleton';
import * as styles from './DetailImage.styles';

function DetailImageFallback() {
  return (
    <Content>
      <Skeleton height="7rem" width="30rem" />
      <div css={styles.wrapper}>
        <Skeleton height="80rem" width="120rem" />
      </div>
    </Content>
  );
}

export default DetailImageFallback;
