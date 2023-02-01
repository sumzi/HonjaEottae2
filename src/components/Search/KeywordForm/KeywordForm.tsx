import useFormKeyword from '@/hooks/useFormKeyword';
import * as styles from './KeywordForm.styles';
import SearchIcon from '@/assets/icons/search.svg';

function KeywordForm() {
  const [value, handleChange, handleSubmit] = useFormKeyword('');

  return (
    <form css={styles.form} onSubmit={handleSubmit}>
      <input
        css={styles.input}
        placeholder="검색어를 입력해주세요."
        maxLength={12}
        onChange={handleChange}
        value={value}
      />
      <button type="submit" css={styles.button}>
        <SearchIcon />
      </button>
    </form>
  );
}

export default KeywordForm;
