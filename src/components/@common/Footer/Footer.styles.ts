import { css, Theme } from '@emotion/react';

const footer = ({ colors, flex }: Theme) => css`
  ${flex.column}
  margin-top: 5rem;
  height: 25rem;
  color: ${colors.GRAY_700};
  font-size: 2.8rem;
`;

export { footer };
