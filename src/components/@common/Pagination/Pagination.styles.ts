import { css, Theme } from '@emotion/react';

const wrapper = ({ flex }: Theme) => css`
  ${flex.row}
  margin-top: 7rem;
  padding: 7rem 0;
`;

const arrow = ({ colors }: Theme) => css`
  margin: 0 2rem;
  border: none;
  background: transparent;
  cursor: pointer;

  svg {
    width: 4rem;
    fill: ${colors.GRAY_200};
    transition: all 0.3s;
    &:hover {
      fill: ${colors.SECONDARY};
    }
  }
`;

const hidden = css`
  cursor: default;
  opacity: 0;
`;

const button = ({ flex }: Theme) => css`
  ${flex.column}
  margin: 0 2rem;
  width: 7rem;
  height: 7rem;
  border: none;
  background: transparent;
  border-radius: 7rem;
  font-size: 4rem;
  cursor: pointer;
`;

const selected = ({ colors }: Theme) => css`
  font-weight: 600;
  color: ${colors.WHITE};
  background: ${colors.PRIMARY};
  cursor: pointer;
`;

export { wrapper, arrow, button, selected, hidden };
