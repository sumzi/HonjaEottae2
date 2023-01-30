import { Link } from 'react-router-dom';
import path_area from '@/assets/images/path_area.png';
import path_location from '@/assets/images/path_location.png';
import path_course from '@/assets/images/path_course.png';
import PATH from '@/constants/path';

import * as styles from './ImageMenu.styles';

function ImageMenu() {
  return (
    <div>
      <div css={styles.row}>
        <div css={styles.col}>
          <Link to={PATH.AREA.URL}>
            <img src={path_area} alt={PATH.AREA.NAME} css={styles.image} />
          </Link>
        </div>
        <div css={styles.col}>
          <Link to={PATH.LOCATION.URL}>
            <img
              src={path_location}
              alt={PATH.LOCATION.URL}
              css={styles.image}
            />
          </Link>
        </div>
      </div>
      <div css={styles.col}>
        <Link to={PATH.COURSE.URL}>
          <img src={path_course} alt={PATH.COURSE.URL} css={styles.image} />
        </Link>
      </div>
    </div>
  );
}

export default ImageMenu;
