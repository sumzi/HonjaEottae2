import Empty from '@/components/@common/Empty/Empty';
import List from '@/components/@common/List/List';
import useLocationBasedList from '@/hooks/queries/location';
import LocationMap from '@/components/Location/LocationMap/LocationMap';
import * as styles from './LocationList.styles';
import Button from '@/components/@common/Button/Button';

interface LocationListProps {
  mapX: string;
  mapY: string;
  refreshGeoLocation: () => void;
}

function LocationList({ mapX, mapY, refreshGeoLocation }: LocationListProps) {
  const { data } = useLocationBasedList(mapX, mapY);

  if (!data) {
    return <div></div>;
  }

  return (
    <div>
      <LocationMap mapX={Number(mapX)} mapY={Number(mapY)} data={data.items} />
      <div css={styles.wrapper}>
        <div css={styles.text}>
          현재 내 위치에서 2km 미터 안에 있는 관광지 정보를 나타냅니다.
        </div>
        <Button size="small" variant="secondary" onClick={refreshGeoLocation}>
          새로고침
        </Button>
      </div>

      {data.items.length === 0 ? (
        <Empty />
      ) : (
        <>
          <List data={data.items} />
        </>
      )}
    </div>
  );
}

export default LocationList;
