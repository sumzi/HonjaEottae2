import { css, Theme } from '@emotion/react';

const wrapper = ({ flex }: Theme) => css`
  ${flex.row}
  div {
    transition: all 0.3s ease-out;
  }
`;

const imageBox = css`
  background: coral;
  width: 350px;
  height: 250px;
  overflow: hidden;
`;

const arrow = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 3.3rem;
  color: gray;
  padding: 0 10px;
  z-index: 10;
`;

const layout = css`
  display: flex;
`;

const imageWrapper = css`
  height: 85rem;
  /* width: 100%; */
`;
const image = css`
  width: 100%;
`;
export { imageWrapper, wrapper, arrow, imageBox, image, layout };
