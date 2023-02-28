import * as styles from './Layout.styles';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <div css={styles.layout}>{children}</div>;
}

export default Layout;
