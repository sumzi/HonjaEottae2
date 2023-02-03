import { useEffect, useRef } from 'react';
import { LocationType } from '@/types/detail';

declare global {
  interface Window {
    kakao: any;
  }
}

const useKakaoMap = ({ mapX, mapY }: LocationType) => {
  const { kakao } = window;
  const container = useRef(null);

  useEffect(() => {
    const position = new kakao.maps.LatLng(mapY, mapX);
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
  }, []);

  return { container };
};

export default useKakaoMap;
