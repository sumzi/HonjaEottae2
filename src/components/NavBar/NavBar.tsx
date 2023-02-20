import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as styles from './NavBar.styles';
import PATH from '@/constants/path';
import SearchForm from '@/components/Search/SearchForm/SearchForm';
import Drawer from '../@common/Drawer/Drawer';
import MenuIcon from '@/assets/icons/menu.svg';
import CloseIcon from '@/assets/icons/close.svg';

function NavBar() {
  const [open, setOpen] = useState(true);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerToggle = () => {
    setOpen(state => !state);
  };

  return (
    <div>
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
        <div
          css={[styles.menu, styles.menus_small]}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </div>
      </nav>
      <Drawer isOpen={open} onCloseDrawer={handleDrawerClose}>
        <nav>
          <ul>
            <li css={styles.drawer_li}>
              <Link to={PATH.AREA.URL} onClick={handleDrawerClose}>
                {PATH.AREA.NAME}
              </Link>
            </li>
            <li css={styles.drawer_li}>
              <Link to={PATH.LOCATION.URL} onClick={handleDrawerClose}>
                {PATH.LOCATION.NAME}
              </Link>
            </li>
            <li css={styles.drawer_li}>
              <Link to={PATH.COURSE.URL} onClick={handleDrawerClose}>
                {PATH.COURSE.NAME}
              </Link>
            </li>
          </ul>
          <div css={styles.close}>
            <div onClick={handleDrawerClose}>
              <CloseIcon />
            </div>
          </div>
        </nav>
      </Drawer>
    </div>
  );
}

export default NavBar;
