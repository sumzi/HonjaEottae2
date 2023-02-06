import * as styles from './Content.styles';

interface ContentProps {
  children: React.ReactNode;
}

function Content({ children }: ContentProps) {
  return <div css={styles.wrapper}>{children}</div>;
}

export default Content;
