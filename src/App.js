import { useEffect } from 'react';
import 'antd/dist/antd.min.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Layout } from './components';

import { StorePage } from './pages';
import { CartPage } from './pages/CartPage';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Routes>
        <Route path='/cart' element={<CartPage />} />
        <Route path='/' element={<StorePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
