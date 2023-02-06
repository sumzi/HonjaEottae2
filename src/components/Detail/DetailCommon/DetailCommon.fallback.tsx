import Title from '@/components/@common/Title/Title';
import Skeleton from '@/components/@common/Skeleton/Skeleton';
import * as styles from './DetailCommon.styles';
import Content from '@/components/@common/Content/Content';

function DetailCommonFallback() {
  return (
    <div>
      <header css={styles.header}>
        <Title>
          <Skeleton height="8rem" width="50rem" />
          <Skeleton width="60rem" />
        </Title>
      </header>
      <section>
        <div css={styles.layout}>
          <Skeleton height="85rem" width="100%" />
          <Skeleton height="85rem" width="100%" />
        </div>
        <Content>
          <Skeleton height="7rem" width="30rem" />
          <Skeleton width="100%" />
          <Skeleton width="100%" />
        </Content>
      </section>
    </div>
  );
}

export default DetailCommonFallback;
