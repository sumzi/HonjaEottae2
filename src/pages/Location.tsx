import Layout from '@/components/@common/Layout/Layout';
import LocationList from '@/components/Location/LocationList/LocationList';
import useLocationBasedList from '@/hooks/queries/location';
import useGetGeoLocation from '@/hooks/useGetGeoLocation';

function Location() {
  const [geoLocation, refreshGeoLocation] = useGetGeoLocation();

  return (
    <Layout>
      <LocationList
        mapX={geoLocation.lat}
        mapY={geoLocation.lng}
        refreshGeoLocation={refreshGeoLocation}
      />
    </Layout>
  );
}

export default Location;
