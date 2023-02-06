import { useDetailIntro } from '@/hooks/queries/detail';
import { DetailType, DetailIntroType } from '@/types/detail';
import Content from '@/components/@common/Content/Content';
import * as styles from './DetailIntro.styles';

function DetailIntro({ contentId, contentTypeId, cat1 }: DetailType) {
  const data = useDetailIntro({ contentId, contentTypeId, cat1 });

  if (!data) {
    return <div></div>;
  }

  return (
    <Content>
      <table>
        <tbody>
          {data.map(
            ({ infoName, infoText }: DetailIntroType, index: number) => (
              <tr key={index}>
                <th css={styles.th}>{infoName}</th>
                <td css={styles.td}>
                  <p dangerouslySetInnerHTML={{ __html: infoText }}></p>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </Content>
  );
}

export default DetailIntro;
