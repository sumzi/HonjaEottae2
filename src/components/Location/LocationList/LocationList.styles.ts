import { css, Theme } from '@emotion/react';

const text = ({ colors }: Theme) => css`
  padding: 2rem 0;
  margin: 2rem 0;
  font-size: 3rem;
  color: ${colors.GRAY_500};
`;

const wrapper = ({ flex }: Theme) => css`
  ${flex.row}
  justify-content: space-between;
  flex-wrap: wrap;
`;

export { text, wrapper };
