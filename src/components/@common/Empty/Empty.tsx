import EmptyIcon from '@/assets/icons/empty.svg';
import * as styles from './Empty.styles';

function Empty() {
  return (
    <div css={styles.wrapper}>
      <div css={styles.icon}>
        <EmptyIcon />
      </div>
      <p css={styles.text}>관련 데이터가 없습니다.</p>
    </div>
  );
}

export default Empty;
