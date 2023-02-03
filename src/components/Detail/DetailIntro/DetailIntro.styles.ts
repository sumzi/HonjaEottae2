import { css, Theme } from '@emotion/react';

const th = ({ colors }: Theme) => css`
  padding: 3rem;
  width: 20%;
  background: ${colors.GRAY_000};
`;

const td = css`
  padding: 3rem;
`;

export { th, td };
