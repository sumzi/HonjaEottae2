import { css, Theme } from '@emotion/react';

const form = css`
  margin-left: 3rem;
  position: relative;
`;

const input = ({ colors }: Theme) => css`
  padding: 4rem;
  width: 60rem;
  background: ${colors.GRAY_000};
  outline: none;
  border: none;
  border-radius: 6rem;
`;

const button = ({ colors }: Theme) => css`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 2.5rem;
  height: 9rem;
  width: 9rem;
  background: ${colors.PRIMARY};
  border-radius: 50%;
  border: none;
  padding: 2rem;
  transform: translateY(-50%);
`;

export { form, input, button };
