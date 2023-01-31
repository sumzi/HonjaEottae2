import { css, Theme } from '@emotion/react';

const layout = ({ sizes }: Theme) => css`
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 14rem;
  ${sizes.tablet} {
    padding: 14rem 10rem;
  }
`;

export { layout };
