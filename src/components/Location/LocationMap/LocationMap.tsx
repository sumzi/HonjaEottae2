import useKakaoMap from '@/hooks/useKakaoMap';
import { KaKaoMapType } from '@/types/location';

function LocationMap({ mapX, mapY, data }: KaKaoMapType) {
  const { container } = useKakaoMap({ mapX, mapY, data });

  return <div id="map" ref={container} style={{ height: '100rem' }}></div>;
}

export default LocationMap;
