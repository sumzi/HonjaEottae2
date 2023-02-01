import { css, Theme } from '@emotion/react';

const row = css`
  display: flex;
  width: 100%;
`;

const col = ({ sizes }: Theme) => css`
  ${sizes.mobile} {
    padding: 1rem;
  }
  padding: 3rem;
`;

const image = css`
  width: 100%;
  border-radius: 20px;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.02);
  }
`;

export { row, col, image };
