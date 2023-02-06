import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/@common/Layout/Layout';
import SearchList from '@/components/Search/SearchList/SearchList';
import Pagination from '@/components/@common/Pagination/Pagination';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const pageNo = Number(searchParams.get('pageNo')) || 1;

  const handleClickPagination = (no: number) => {
    setSearchParams({ keyword, pageNo: String(no) });
  };

  if (!keyword) {
    return (
      <Layout>
        <div> 검색어를 입력해주세요</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SearchList
        keyword={keyword}
        pageNo={pageNo}
        handleClickPagination={handleClickPagination}
      />
    </Layout>
  );
}

export default Search;
