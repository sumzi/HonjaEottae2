import { css, Global, Theme } from '@emotion/react';

const global = ({ colors, sizes }: Theme) => css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    font-size: 4px;

    ${sizes?.mobile} {
      font-size: 3.5px;
    }
  }

  body {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

function GlobalStyle() {
  return <Global styles={global} />;
}

export default GlobalStyle;
