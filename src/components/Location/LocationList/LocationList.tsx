import Empty from '@/components/@common/Empty/Empty';
import List from '@/components/@common/List/List';
import { useLocationBasedList } from '@/hooks/queries/location';
import LocationMap from '@/components/Location/LocationMap/LocationMap';
import * as styles from './LocationList.styles';
import Button from '@/components/@common/Button/Button';
import Title from '@/components/@common/Title/Title';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface LocationListProps {
  mapX: string;
  mapY: string;
  refreshGeoLocation: () => void;
}

function LocationList({ mapX, mapY, refreshGeoLocation }: LocationListProps) {
  const { data, fetchNextPage } = useLocationBasedList(mapX, mapY);
  const ref = useIntersectionObserver(data?.pages, fetchNextPage);

  if (!data) {
    return <div></div>;
  }

  const items = [].concat(...data.pages.map(page => page.items));

  return (
    <div>
      <Title>
        <h1>
          <label>내주변관광지</label>
        </h1>
        {data && <p>총 {data.pages[0].totalCount} 개 관광지</p>}
      </Title>
      <LocationMap mapX={Number(mapX)} mapY={Number(mapY)} data={items} />
      <div css={styles.wrapper}>
        <div css={styles.text}>
          현재 내 위치에서 2km 미터 안에 있는 관광지 정보를 나타냅니다.
        </div>
        <Button size="small" variant="secondary" onClick={refreshGeoLocation}>
          새로고침
        </Button>
      </div>

      {items.length === 0 ? (
        <Empty />
      ) : (
        <>
          <List data={items} />
          <div ref={ref} css={styles.target} />
        </>
      )}
    </div>
  );
}

export default LocationList;
