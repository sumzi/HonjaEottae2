import Content from '@/components/@common/Content/Content';
import Skeleton from '@/components/@common/Skeleton/Skeleton';
import * as styles from './DetailInfo.styles';

function DetailInfoFallback() {
  return (
    <Content>
      <Skeleton height="7rem" width="30rem" />
      <div css={styles.wrapper}>
        <div css={styles.image}>
          <Skeleton width="60rem" height="60rem" circle={true} />
        </div>
        <Skeleton width="100%" height="60rem" />
      </div>
    </Content>
  );
}

export default DetailInfoFallback;
