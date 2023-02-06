import { css, Theme } from '@emotion/react';

const wrapper = ({ sizes }: Theme) => css`
  display: grid;
  gap: 5rem;
  width: 100%;
  ${sizes.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${sizes.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${sizes.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { wrapper };
