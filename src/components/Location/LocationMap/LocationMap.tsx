import useKakaoMap from '@/hooks/useKakaoMap';
import { KaKaoMapType } from '@/types/location';
import { css, Theme } from '@emotion/react';

const wrapper = ({ colors }: Theme) => css`
  height: 100rem;
  background: ${colors.GRAY_100};
`;

function LocationMap({ mapX, mapY, data }: KaKaoMapType) {
  const { container } = useKakaoMap({ mapX, mapY, data });

  return <div id="map" ref={container} css={wrapper}></div>;
}

export default LocationMap;
