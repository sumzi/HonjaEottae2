import { css, Theme } from '@emotion/react';

const wrapper = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 30;
`;

const container = ({ colors, sizes }: Theme, isOpen: boolean) => css`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  padding: 5rem;
  background: ${colors.WHITE};
  z-index: 40;
  transition: all 0.4s;
  ${sizes.mobile} {
    width: 100%;
  }
  ${!isOpen &&
  css`
    margin-right: -300px;
    ${sizes.mobile} {
      margin-right: -100%;
    }
  `}
`;

export { wrapper, container };
