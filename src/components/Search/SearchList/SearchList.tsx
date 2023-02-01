import { useEffect } from 'react';
import Card from '@/components/common/Card/Card';
import useSearchKeyword from '@/hooks/queries/search';
import { SearchKeywordItemType } from '@/types/search';
import * as styles from './SearchList.styles';

interface SearchListProps {
  keyword: string;
}

function SearchList({ keyword }: SearchListProps) {
  const { data, refetch } = useSearchKeyword(keyword);

  useEffect(() => {
    refetch();
  }, [keyword]);

  return (
    <>
      <header css={styles.header}>
        <h1 css={styles.keyword}>"{keyword}"</h1>
        {data && <p css={styles.total}>총 {data.totalCount} 개 관광지</p>}
      </header>
      <main css={styles.cards}>
        {data &&
          data.items.map((item: SearchKeywordItemType) => (
            <Card key={item.contentId} image={item.image} title={item.title} />
          ))}
      </main>
    </>
  );
}

export default SearchList;
