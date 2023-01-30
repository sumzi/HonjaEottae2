import { Link } from 'react-router-dom';
import * as styles from './NavBar.styles';
import PATH from '@/constants/path';

function NavBar() {
  return (
    <nav css={styles.navbar}>
      <div css={styles.logo}>
        <Link to={PATH.MAIN.URL}>{PATH.MAIN.NAME}</Link>
      </div>
      <ul css={styles.menus}>
        <li css={styles.menu}>
          <Link to={PATH.AREA.URL}>{PATH.AREA.NAME}</Link>
        </li>
        <li css={styles.menu}>
          <Link to={PATH.LOCATION.URL}>{PATH.LOCATION.NAME}</Link>
        </li>
        <li css={styles.menu}>
          <Link to={PATH.COURSE.URL}>{PATH.COURSE.NAME}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
