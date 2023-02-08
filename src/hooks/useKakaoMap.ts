import { useEffect, useRef } from 'react';
import { LocationType } from '@/types/detail';
import { KaKaoMapType, LocationBasedListType } from '@/types/location';

declare global {
  interface Window {
    kakao: any;
  }
}

const useKakaoMap = ({ mapX, mapY, data }: KaKaoMapType) => {
  const { kakao } = window;
  const container = useRef(null);

  useEffect(() => {
    const position = new kakao.maps.LatLng(mapX, mapY);

    if (data) {
      const options = {
        center: position,
        level: 6,
      };
      const map = new kakao.maps.Map(container.current, options);
      map.setDraggable(true);
      map.setZoomable(true);

      data.forEach((item, i) => {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(item.mapX, item.mapY),
        });
      });
    } else {
      const options = {
        center: position,
        level: 4,
      };
      const map = new kakao.maps.Map(container.current, options);
      map.setDraggable(false);
      map.setZoomable(false);
      const marker = new kakao.maps.Marker({
        position,
      });
      marker.setMap(map);
    }
  }, []);

  return { container };
};

export default useKakaoMap;
