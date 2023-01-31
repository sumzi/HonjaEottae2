import { Route, Routes } from 'react-router-dom';
import Main from '@/pages/Main';
import Search from '@/pages/Search';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/common/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search/:keyword" element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
