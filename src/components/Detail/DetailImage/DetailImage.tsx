import { useState, useEffect, useRef, useMemo } from 'react';
import { useDetailImage } from '@/hooks/queries/detail';
import { DetailImageType, DetailType } from '@/types/detail';
import * as styles from './DetailImage.styles';
import Carousel from '@/components/common/Carousel/Carousel';
import Content from '@/components/common/Content/Content';

function DetailImage({ contentId }: DetailType) {
  const { data } = useDetailImage(contentId);

  if (!data) {
    return <div></div>;
  }

  return (
    <Content>
      <label>관련 이미지</label>
      {data && (
        <Carousel>
          {data.map(({ imageUrl, imageNum }: DetailImageType) => (
            <div key={imageNum}>
              <img src={imageUrl} alt={imageNum} key={imageNum} />
            </div>
          ))}
        </Carousel>
      )}
    </Content>
  );
}

export default DetailImage;
