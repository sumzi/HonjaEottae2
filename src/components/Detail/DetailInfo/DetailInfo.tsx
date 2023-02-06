import Content from '@/components/@common/Content/Content';
import { useDetailInfo } from '@/hooks/queries/detail';
import { DetailType, DetailInfoType } from '@/types/detail';
import * as styles from './DetailInfo.styles';
import no_image from '@/assets/images/no_image.jpg';

function DetailInfo({ contentId, contentTypeId }: DetailType) {
  const { data } = useDetailInfo({ contentId, contentTypeId });
  if (!data) {
    return <div></div>;
  }

  return (
    <Content>
      <label>코스 소개</label>
      {data.map(
        ({ id, name, overview, image }: DetailInfoType, index: number) => (
          <div key={id} css={styles.wrapper}>
            <div css={styles.line} />
            <div css={styles.image}>
              <img src={image ? image : no_image} />
            </div>
            <div css={styles.content}>
              <div css={styles.layout}>
                <div css={styles.index}>{index + 1}</div>
                <label css={styles.name}>{name}</label>
              </div>

              <p>{overview}</p>
            </div>
          </div>
        ),
      )}
    </Content>
  );
}

export default DetailInfo;
