import { Route, Routes } from 'react-router-dom';
import Main from '@/pages/Main';
import Search from '@/pages/Search';
import Detail from '@/pages/Detail';
import Area from '@/pages/Area';
import NotFound from '@/pages/NotFound';
import Course from '@/pages/Course';
import Location from '@/pages/Location';
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
        <Route path={PATH.LOCATION.URL} element={<Location />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
