import 'antd/dist/antd.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components';

import { StorePage } from './pages';
import { CartPage } from './pages/CartPage';

function App() {
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
