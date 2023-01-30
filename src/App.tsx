import { Route, Routes } from 'react-router-dom';
import Main from '@/pages/Main';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/common/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
