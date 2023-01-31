import React, { useCallback, useState, useEffect } from 'react';

function useInput(
  initialValue: string | number,
): [typeof initialValue, (e: React.ChangeEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, handleChange];
}

export default useInput;
