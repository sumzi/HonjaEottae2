import { css, Theme } from '@emotion/react';

const wrapper = ({ flex }: Theme) => css`
  ${flex.column}
  height:100rem;
`;

const icon = ({ colors }: Theme) => css`
  width: 20rem;
  fill: ${colors.GRAY_100};
`;

const text = ({ colors }: Theme) => css`
  padding: 5rem;
  font-size: 3rem;
  color: ${colors.GRAY_500};
`;

export { wrapper, icon, text };
