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
  ${sizes.tablet} {
    display: none;
  }
  & > li {
    margin-left: 10rem;
  }
  justify-content: space-between;
`;

const menus_small = ({ sizes }: Theme) => css`
  ${sizes.tablet} {
    display: block;
  }
  display: none;
`;

const menu = ({ colors }: Theme) => css`
  cursor: pointer;
  font-size: 4rem;
  color: ${colors.GRAY_400};
  fill: ${colors.GRAY_400};
  transition: all 0.2s;
  &:hover {
    color: ${colors.GRAY_800};
    fill: ${colors.GRAY_800};
  }
`;

const drawer_li = ({ colors }: Theme) => css`
  margin: 4rem 0;
  padding: 2rem;
  font-size: 4.5rem;
  text-align: center;
  transition: all 0.2s;
  color: ${colors.GRAY_400};
  &:hover {
    color: ${colors.GRAY_800};
  }
`;

const close = ({ colors }: Theme) => css`
  text-align: center;
  & > div {
    display: inline-block;
  }
  svg {
    width: 8rem;
    transition: all 0.2s;
    cursor: pointer;
    fill: ${colors.GRAY_400};
    &:hover {
      fill: ${colors.GRAY_800};
    }
  }
`;

export {
  navbar,
  wrapper,
  logo,
  menus_full,
  menu,
  menus_small,
  drawer_li,
  close,
};
