import MESSAGE from '@/constants/message';
import { validatekeyword } from '@/utils/validator';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useFormKeyword(
  initialValue: string,
): [
  typeof initialValue,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (e: React.FormEvent<HTMLFormElement>) => void,
] {
  const navigate = useNavigate();
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        validatekeyword(value);
        navigate(`/search?keyword=${value}`);
      } catch (error) {
        alert(MESSAGE.KEYWORD_EEROR);
      }
    },
    [value],
  );

  return [value, handleChange, handleSubmit];
}

export default useFormKeyword;
