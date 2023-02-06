import { css, Theme } from '@emotion/react';

const wrapper = ({ flex }: Theme) => css`
  ${flex.row}
  position: relative;
  div {
    transition: all 0.3s ease-out;
  }
  .btn {
    opacity: 0;
  }
  &:hover .btn {
    cursor: pointer;
    opacity: 1;
  }
`;

const slider = ({ sizes }: Theme) => css`
  position: relative;
  overflow: hidden;
  width: 120rem;
  height: 80rem;
  ${sizes.mobile} {
    max-width: 75rem;
    height: 50rem;
  }
`;

const items = ({ flex, sizes }: Theme) => css`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  & > div {
    ${flex.row}
    width: 120rem;
    img {
      height: 80rem;
      width: 120rem;
      object-fit: cover;
    }
    ${sizes.mobile} {
      width: 75rem;
      img {
        height: 50rem;
        width: 75rem;
      }
    }
  }
`;

const button = ({ colors }: Theme) => css`
  position: absolute;
  width: 10rem;
  height: 10rem;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  fill: ${colors.WHITE};
  transition: all 0.2s;
  z-index: 10;
  opacity: 0;
  &:hover {
    fill: ${colors.SECONDARY};
  }
`;

const left = css`
  left: 6rem;
  padding: 2rem;
`;

const right = css`
  right: 6rem;
  padding: 2rem;
`;

export { wrapper, slider, button, left, right, items };
