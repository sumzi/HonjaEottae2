import { SearchItemType } from '@/types/search';
import * as styles from './Card.styles';
import no_image_small from '@/assets/images/no_image_small.jpg';

function Card({ image, title }: SearchItemType) {
  return (
    <div css={styles.card}>
      <img
        css={styles.image}
        src={image === '' ? no_image_small : image}
        alt={title}
      />
      <div css={styles.content}>{title}</div>
    </div>
  );
}

export default Card;
