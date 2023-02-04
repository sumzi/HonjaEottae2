import React, { useRef, useEffect, useState } from 'react';
import * as styles from './Carousel.styles';
import ArrowLeftIcon from '@/assets/icons/arrow_left.svg';
import ArrowRightIcon from '@/assets/icons/arrow_right.svg';
import { css } from '@emotion/react';

interface CarouselProps {
  children: React.ReactNode;
}

function Carousel({ children }: CarouselProps) {
  const childrenSize = useRef(React.Children.count(children));
  const [current, setCurrent] = useState(0);

  const handleChange = (i: number) => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = 0;
    else if (nextIndex >= childrenSize.current)
      nextIndex = childrenSize.current - 1;

    setCurrent(nextIndex);
  };

  return (
    <div css={styles.wrapper}>
      <div
        className={0 !== current ? 'btn' : ''}
        css={[styles.button, styles.left]}
        onClick={() => handleChange(-1)}
      >
        <ArrowLeftIcon />
      </div>
      <div css={styles.slider}>
        <div style={{ marginLeft: `-${current}00%` }} css={styles.items}>
          {children}
        </div>
      </div>
      <div
        className={childrenSize.current - 1 !== current ? 'btn' : ''}
        css={[styles.button, styles.right]}
        onClick={() => handleChange(1)}
      >
        <ArrowRightIcon />
      </div>
    </div>
  );
}

export default Carousel;
