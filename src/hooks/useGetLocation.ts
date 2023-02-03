import { useEffect, useState, useCallback } from 'react';

interface GeoLocationType {
  lat: string;
  lng: string;
}

function useGetGeoLocation(): [typeof geoLocation, () => void] {
  const [geoLocation, setGeoLocation] = useState<GeoLocationType>();

  const refreshGeoLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = String(position.coords.latitude);
        const lng = String(position.coords.longitude);
        setGeoLocation({ lat, lng });
      });
    } else {
      alert('현재 위치 정보를 받아 올 수 없습니다. 다시 시도해주세요');
    }
  }, []);

  useEffect(() => {
    refreshGeoLocation();
  }, []);

  return [geoLocation, refreshGeoLocation];
}

export default useGetGeoLocation;
