import { useEffect } from 'react';
import 'antd/dist/antd.min.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Layout } from './components';

import { ProductDetailPage, StorePage, CartPage } from './pages';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Routes>
        <Route path='/detail/:id' element={<ProductDetailPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/' element={<StorePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
