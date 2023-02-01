import { Route, Routes } from 'react-router-dom';
import Main from '@/pages/Main';
import Search from '@/pages/Search';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/common/Footer/Footer';
import PATH from '@/constants/path';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={PATH.MAIN.URL} element={<Main />} />
        <Route path={PATH.SEARCH.URL} element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
