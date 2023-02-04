import { css, Theme } from '@emotion/react';

const layout = ({ sizes }: Theme) => css`
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 20rem;
  ${sizes.tablet} {
    padding-left: 10rem;
    padding-right: 10rem;
  }
`;

export { layout };
