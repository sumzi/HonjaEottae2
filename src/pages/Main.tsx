import Layout from '@/components/common/Layout/Layout';
import KeywordForm from '@/components/Search/KeywordForm/KeywordForm';
import ImageMenu from '@/components/Main/ImageMenu/ImageMenu';

function Main() {
  return (
    <Layout>
      <KeywordForm />
      <ImageMenu />
    </Layout>
  );
}

export default Main;
