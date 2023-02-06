import Title from '@/components/@common/Title/Title';
import Skeleton from '../Skeleton/Skeleton';
import * as styles from './List.styles';

function ListFallback() {
  return (
    <div>
      <Title>
        <Skeleton height={'8rem'} />
        <Skeleton />
      </Title>
      <div css={styles.wrapper}>
        <Skeleton height={'58rem'} width={'100%'} />
        <Skeleton height={'58rem'} width={'100%'} />
        <Skeleton height={'58rem'} width={'100%'} />
        <Skeleton height={'58rem'} width={'100%'} />
        <Skeleton height={'58rem'} width={'100%'} />
        <Skeleton height={'58rem'} width={'100%'} />
      </div>
    </div>
  );
}

export default ListFallback;
