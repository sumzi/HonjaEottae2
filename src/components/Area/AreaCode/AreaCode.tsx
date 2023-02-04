import Button from '@/components/@common/Button/Button';
import areaCodeItem from '@/utils/areaCodeItem';
import useSelectArea from '@/hooks/useSelectArea';
import { AreaCodeType } from '@/types/area';
import * as styles from './AreaCode.styles';

function AreaCode() {
  const [
    areaCode,
    sigunguCode,
    sigunguCodeItem,
    handleSelectArea,
    handleSelectSigungu,
  ] = useSelectArea();

  return (
    <div>
      <div css={styles.container}>
        <div css={styles.title}>시도</div>
        <div css={styles.layout}>
          {areaCodeItem.map(({ code, name }: AreaCodeType) => (
            <div
              key={code}
              onClick={() => handleSelectArea(code, name)}
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
                onClick={() => handleSelectSigungu(code, name)}
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
