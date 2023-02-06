import { css, Theme } from '@emotion/react';
import { Link } from 'react-router-dom';
import Layout from '@/components/@common/Layout/Layout';
import PATH from '@/constants/path';
import Button from '@/components/@common/Button/Button';
import NotFoundImage from '@/assets/images/404.png';

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

function NotFound() {
  return (
    <Layout>
      <div css={wrapper}>
        <img src={NotFoundImage} />
        <p>페이지를 찾을 수 없습니다.</p>
        <Link to={PATH.MAIN.URL}>
          <Button>혼자어때 페이지로 돌아가기</Button>
        </Link>
      </div>
    </Layout>
  );
}

export default NotFound;
