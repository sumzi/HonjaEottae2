import { css, Theme } from '@emotion/react';

const count = ({ colors }: Theme) => css`
  padding-bottom: 10rem;
  text-align: center;
  & > p {
    font-size: 4rem;
    color: ${colors.GRAY_500};
  }
`;
export { count };
