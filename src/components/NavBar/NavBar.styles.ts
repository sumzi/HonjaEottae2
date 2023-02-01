import { css, Theme } from '@emotion/react';

const navbar = ({ colors, flex, sizes }: Theme) => css`
  ${flex.row}
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 18rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
  background: ${colors.WHITE};
  padding: 0 20rem;
  ${sizes.mobile} {
    padding: 0 5rem;
  }
`;

const wrapper = ({ colors, flex }: Theme) => css`
  ${flex.row}
  color: ${colors.PRIMARY};
  font-size: 5rem;
  font-weight: 600;
`;

const logo = css`
  width: 20rem;
`;

const menus_full = ({ flex, sizes }: Theme) => css`
  ${flex.row}
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  ${sizes.tablet} {
    display: none;
  }
`;

const menus_small = ({ sizes }: Theme) => css`
  display: none;
  ${sizes.tablet} {
    display: block;
  }
`;

const menu = ({ colors }: Theme) => css`
  margin-left: 10rem;
  font-size: 4rem;
  color: ${colors.GRAY_400};
  &:hover {
    color: ${colors.GRAY_800};
  }
`;

export { navbar, wrapper, logo, menus_full, menu, menus_small };
