import { css } from '@emotion/react';

const row = css`
  display: flex;
  width: 100%;
`;

const col = css`
  padding: 3rem;
`;

const image = css`
  width: 100%;
  border-radius: 10rem;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.02);
  }
`;

export { row, col, image };
