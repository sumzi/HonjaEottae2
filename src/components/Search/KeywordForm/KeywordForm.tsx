import { useCallback } from 'react';
import Button from '@/components/common/Button/Button';
import useInput from '@/hooks/useInput';
import { useNavigate } from 'react-router-dom';
import * as styles from './KeywordForm.styles';

function KeywordForm() {
  const navigate = useNavigate();
  const [value, handleChange] = useInput('');

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (value === '') return;
      navigate(`/search/${value}`);
    },
    [value],
  );

  return (
    <div css={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          css={styles.input}
          placeholder="검색어를 입력해주세요."
          onChange={handleChange}
        />
        <Button>검색</Button>
      </form>
    </div>
  );
}

export default KeywordForm;
