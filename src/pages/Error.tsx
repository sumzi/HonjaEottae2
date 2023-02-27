import { css, Theme } from '@emotion/react';
import Button from '@/components/@common/Button/Button';
import Layout from '@/components/@common/Layout/Layout';
import PATH from '@/constants/path';

const wrapper = ({ flex }: Theme) => css`
  ${flex.column}
  height:80vh;
  img {
    height: 40rem;
  }
  p {
    margin: 8rem 0;
    font-size: 5rem;
  }
`;

function Error() {
  return (
    <Layout>
      <div css={wrapper}>
        <p>에러가 발생했습니다. 잠시 후에 다시 시도해주세요.</p>
        <a href={PATH.MAIN.URL}>
          <Button>혼자어때 페이지로 돌아가기</Button>
        </a>
      </div>
    </Layout>
  );
}

export default Error;
