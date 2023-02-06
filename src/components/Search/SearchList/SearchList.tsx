import Empty from '@/components/@common/Empty/Empty';
import List from '@/components/@common/List/List';
import Pagination from '@/components/@common/Pagination/Pagination';
import Title from '@/components/@common/Title/Title';
import useSearchKeyword from '@/hooks/queries/search';

interface SearchListProps {
  keyword: string;
  pageNo: number;
  handleClickPagination: (no: number) => void;
}

function SearchList({
  keyword,
  pageNo,
  handleClickPagination,
}: SearchListProps) {
  const { data } = useSearchKeyword(keyword, pageNo);

  if (!data) {
    return <div></div>;
  }

  return (
    <div>
      <Title>
        <h1>
          <label>검색어</label> : {keyword}
        </h1>
        {data && <p>총 {data.totalCount} 개 관광지</p>}
      </Title>
      {data.items.length === 0 ? <Empty /> : <List data={data?.items} />}
      <Pagination
        totalCount={data.totalCount}
        pageNo={pageNo}
        handleClickPagination={handleClickPagination}
      />
    </div>
  );
}

export default SearchList;
