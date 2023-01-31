import Layout from '@/components/common/Layout/Layout';
import KeywordForm from '@/components/Search/KeywordForm/KeywordForm';
import SearchList from '@/components/Search/SearchList/SearchList';

function Search() {
  return (
    <Layout>
      <KeywordForm />
      <SearchList />
    </Layout>
  );
}

export default Search;
