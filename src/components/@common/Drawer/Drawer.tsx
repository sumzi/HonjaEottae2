import { useTheme } from '@emotion/react';
import * as styles from './Drawer.styles';

interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onCloseDrawer: () => void;
}

function Drawer({ children, isOpen, onCloseDrawer }: DrawerProps) {
  const theme = useTheme();

  return (
    <div>
      {isOpen && <div css={styles.wrapper} onClick={onCloseDrawer} />}
      <div css={styles.container(theme, isOpen)}>{children}</div>
    </div>
  );
}

export default Drawer;
