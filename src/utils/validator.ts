import MESSAGE from '@/constants/message';

const validatekeyword = (keyword: string) => {
  if (keyword === '') {
    throw new Error(MESSAGE.KEYWORD_EEROR);
  }
};

export { validatekeyword };
