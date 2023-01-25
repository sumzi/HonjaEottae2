import { Link } from 'react-router-dom';
import * as styles from './NavBar.styles';

function NavBar() {
  return (
    <nav css={styles.navbar}>
      <div css={styles.logo}>
        <Link to="/">혼자어때</Link>
      </div>
      <ul css={styles.menus}>
        <li css={styles.menu}>
          <Link to="1">menu1</Link>
        </li>
        <li css={styles.menu}>
          <Link to="1">menu2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
