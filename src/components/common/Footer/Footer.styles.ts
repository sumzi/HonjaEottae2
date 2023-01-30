import { css, Theme } from '@emotion/react';

const footer = ({ colors, flex }: Theme) => css`
  ${flex.column}
  margin-top: 5rem;
  height: 25rem;
  background: ${colors.GRAY_000};
  color: ${colors.GRAY_700};
  line-height: 80%;
`;

export { footer };
