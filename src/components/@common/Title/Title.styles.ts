import { css, Theme } from '@emotion/react';

const wrapper = ({ flex, colors }: Theme) => css`
  ${flex.column}
  padding: 10rem;
  & > h1 {
    font-size: 6.5rem;
    margin-bottom: 2rem;
  }
  & > p {
    font-size: 4rem;
    color: ${colors.GRAY_500};
  }
`;

export { wrapper };
