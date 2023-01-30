import Button from '@/components/common/Button/Button';
import * as styles from './KeywordInput.styles';

function Input() {
  return (
    <div css={styles.wrapper}>
      <form>
        <input css={styles.input} placeholder="검색어를 입력해주세요."></input>
        <Button>검색</Button>
      </form>
    </div>
  );
}

export default Input;
