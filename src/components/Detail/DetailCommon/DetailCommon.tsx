import { useDetailCommon } from '@/hooks/queries/detail';
import { DetailType } from '@/types/detail';
import ArrowLeftIcon from '@/assets/icons/arrow_left.svg';
import * as styles from './DetailCommon.styles';
import DetailMap from '../DetailMap/DetailMap';
import no_image from '@/assets/images/no_image_small.jpg';
import { useNavigate } from 'react-router-dom';
import Content from '@/components/@common/Content/Content';
import Title from '@/components/@common/Title/Title';

function DetailCommon({ contentId, contentTypeId }: DetailType) {
  const navigate = useNavigate();
  const { data } = useDetailCommon({ contentId, contentTypeId });

  return (
    <div>
      {data && (
        <>
          <header css={styles.header}>
            <Title>
              <div css={styles.icon} onClick={() => navigate(-1)}>
                <ArrowLeftIcon />
              </div>
              <h1>{data.title}</h1>
              <p>{data.address}</p>
            </Title>
          </header>
          <section>
            {data.cat1 !== 'C01' && (
              <div css={styles.layout}>
                <article>
                  <img
                    src={data.image === '' ? no_image : data.image}
                    alt={data.title}
                    css={styles.image}
                  />
                </article>
                <article>
                  <div>
                    <DetailMap mapX={data.mapX} mapY={data.mapY} />
                  </div>
                </article>
              </div>
            )}
            <Content>
              <label>상세 설명</label>
              <p dangerouslySetInnerHTML={{ __html: data.overview }} />
            </Content>
          </section>
        </>
      )}
    </div>
  );
}

export default DetailCommon;
