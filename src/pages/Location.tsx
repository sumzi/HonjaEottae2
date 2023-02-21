import Layout from '@/components/@common/Layout/Layout';
import ListFallback from '@/components/@common/List/List.fallback';
import LocationList from '@/components/Location/LocationList/LocationList';
import useGetGeoLocation from '@/hooks/useGetGeoLocation';
import { Suspense } from 'react';

function Location() {
  const [geoLocation, refreshGeoLocation] = useGetGeoLocation();

  return (
    <Layout>
      <Suspense fallback={<ListFallback />}>
        <LocationList
          mapX={geoLocation.lat}
          mapY={geoLocation.lng}
          refreshGeoLocation={refreshGeoLocation}
        />
      </Suspense>
    </Layout>
  );
}

export default Location;
