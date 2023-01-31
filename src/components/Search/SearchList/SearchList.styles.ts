import { css, Theme } from '@emotion/react';

const cards = ({ sizes }: Theme) => css`
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

const header = css`
  margin-bottom: 4rem;
  padding: 5rem;
  text-align: center;
`;

const keyword = css`
  font-size: 6rem;
`;

const total = ({ colors }: Theme) => css`
  font-size: 4rem;
  color: ${colors.GRAY_600};
`;

export { cards, header, keyword, total };
