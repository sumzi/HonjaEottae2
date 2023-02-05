import { Route, Routes } from 'react-router-dom';
import Main from '@/pages/Main';
import Search from '@/pages/Search';
import Detail from '@/pages/Detail';
import Area from '@/pages/Area';
import Course from '@/pages/Course';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/@common/Footer/Footer';
import PATH from '@/constants/path';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={PATH.MAIN.URL} element={<Main />} />
        <Route path={PATH.SEARCH.URL} element={<Search />} />
        <Route path={PATH.DETAIL.URL} element={<Detail />} />
        <Route path={PATH.AREA.URL} element={<Area />} />
        <Route path={PATH.COURSE.URL} element={<Course />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
