import { Link } from 'react-router-dom';
import Card from '@/components/@common/Card/Card';
import { SearchItemType } from '@/types/search';
import * as styles from './List.styles';

interface ListProps {
  data: SearchItemType[];
}

function List({ data }: ListProps) {
  return (
    <div css={styles.wrapper}>
      {data &&
        data.map(
          ({
            contentId,
            contentTypeId,
            cat1,
            image,
            title,
          }: SearchItemType) => (
            <Link
              to={`/detail?contentId=${contentId}&contentTypeId=${contentTypeId}&cat1=${cat1}`}
              key={contentId}
            >
              <Card image={image} title={title} />
            </Link>
          ),
        )}
    </div>
  );
}

export default List;
