import { css, Theme } from '@emotion/react';

const header = css`
  margin-bottom: 4rem;
  padding: 5rem;
  text-align: center;
`;

const keyword = css`
  font-size: 6rem;
`;

const total = ({ colors }: Theme) => css`
  font-size: 4rem;
  color: ${colors.GRAY_600};
`;

export { header, keyword, total };
