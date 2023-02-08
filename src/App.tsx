import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '@/pages/Main';
import NotFound from '@/pages/NotFound';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/@common/Footer/Footer';
import PATH from '@/constants/path';

const Search = lazy(() => import('@/pages/Search'));
const Detail = lazy(() => import('@/pages/Detail'));
const Area = lazy(() => import('@/pages/Area'));
const Course = lazy(() => import('@/pages/Course'));
const Location = lazy(() => import('@/pages/Location'));

function App() {
  return (
    <Suspense fallback={<></>}>
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
    </Suspense>
  );
}

export default App;
