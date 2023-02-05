import List from '@/components/@common/List/List';
import Title from '@/components/@common/Title/Title';
import useSearchKeyword from '@/hooks/queries/search';

interface SearchListProps {
  keyword: string;
}

function SearchList({ keyword }: SearchListProps) {
  const { data } = useSearchKeyword(keyword);
  return (
    <div>
      <Title>
        <h1>"{keyword}"</h1>
        {data && <p>총 {data.totalCount} 개 관광지</p>}
      </Title>
      <List data={data?.items} />
    </div>
  );
}

export default SearchList;
