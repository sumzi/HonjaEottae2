import Button from '@/components/@common/Button/Button';
import areaCodeItem from '@/utils/areaCodeItem';
import { AreaCodeType } from '@/types/area';
import { useAreaCode } from '@/hooks/queries/area';
import * as styles from './AreaCode.styles';

interface AreaCodeProps {
  areaCode: string;
  sigunguCode: string;
  handleClickArea: (code: string, name: string) => void;
  handleClickSigungu: (code: string, name: string) => void;
}

function AreaCode({
  areaCode,
  sigunguCode,
  handleClickArea,
  handleClickSigungu,
}: AreaCodeProps) {
  const { data: sigunguCodeItem } = useAreaCode(areaCode);

  return (
    <div>
      <div css={styles.container}>
        <div css={styles.title}>시도</div>
        <div css={styles.layout}>
          {areaCodeItem.map(({ code, name }: AreaCodeType) => (
            <div
              key={code}
              onClick={() => handleClickArea(code, name)}
              css={styles.button}
            >
              <Button
                variant="secondary"
                size="small"
                selected={code === areaCode}
              >
                {name}
              </Button>
            </div>
          ))}
        </div>
      </div>
      {sigunguCodeItem && (
        <div css={styles.container}>
          <div css={styles.title}>시군구</div>
          <div css={styles.layout}>
            {sigunguCodeItem.map(({ code, name }: AreaCodeType) => (
              <div
                key={code}
                onClick={() => handleClickSigungu(code, name)}
                css={styles.button}
              >
                <Button
                  variant="secondary"
                  size="small"
                  selected={code === sigunguCode}
                >
                  {name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AreaCode;
