import useKakaoMap from '@/hooks/useKakaoMap';
import { LocationType } from '@/types/detail';

function DetailMap({ mapX, mapY }: LocationType) {
  const { container } = useKakaoMap({ mapX, mapY });

  return <div id="map" ref={container} style={{ height: '85rem' }}></div>;
}

export default DetailMap;
