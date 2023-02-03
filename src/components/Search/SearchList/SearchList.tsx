import Card from '@/components/common/Card/Card';
import PATH from '@/constants/path';
import useSearchKeyword from '@/hooks/queries/search';
import { SearchKeywordItemType } from '@/types/search';
import { Link } from 'react-router-dom';
import * as styles from './SearchList.styles';

interface SearchListProps {
  keyword: string;
}

function SearchList({ keyword }: SearchListProps) {
  const { data } = useSearchKeyword(keyword);
  return (
    <div>
      <header css={styles.header}>
        <h1 css={styles.keyword}>"{keyword}"</h1>
        {data && <p css={styles.total}>총 {data.totalCount} 개 관광지</p>}
      </header>
      <main css={styles.cards}>
        {data &&
          data.items.map((item: SearchKeywordItemType) => (
            <Link
              to={`/detail?contentId=${item.contentId}&contentTypeId=${item.contentTypeId}&cat1=${item.cat1}`}
              key={item.contentId}
            >
              <Card
                key={item.contentId}
                image={item.image}
                title={item.title}
              />
            </Link>
          ))}
      </main>
    </div>
  );
}

export default SearchList;
