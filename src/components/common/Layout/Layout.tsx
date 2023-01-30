import { HTMLAttributes } from 'react';
import * as styles from './Layout.styles';

interface LayoutProps extends HTMLAttributes<HTMLElement> {}

function Layout({ children }: LayoutProps) {
  return <div css={styles.layout}>{children}</div>;
}

export default Layout;
