import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/common/Layout/Layout';
import SearchList from '@/components/Search/SearchList/SearchList';

function Search() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  if (!keyword) {
    return (
      <Layout>
        <div> 검색어를 입력해주세요</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SearchList keyword={keyword} />
    </Layout>
  );
}

export default Search;
