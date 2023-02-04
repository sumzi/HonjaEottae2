import { Link } from 'react-router-dom';
import * as styles from './NavBar.styles';
import PATH from '@/constants/path';
import SearchForm from '../Search/SearchForm/SearchForm';

function NavBar() {
  return (
    <nav css={styles.navbar}>
      <div css={styles.wrapper}>
        <div css={styles.logo}>
          <Link to={PATH.MAIN.URL}>{PATH.MAIN.NAME}</Link>
        </div>
        <SearchForm />
      </div>
      <ul css={styles.menus_full}>
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
      <div css={[styles.menu, styles.menus_small]}>menu</div>
    </nav>
  );
}

export default NavBar;
