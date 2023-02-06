import React from 'react';
import * as styles from './Title.styles';

interface TitleProps {
  children: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return <div css={styles.wrapper}>{children}</div>;
}

export default Title;
