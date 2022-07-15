import { useEffect } from "react";
import "antd/dist/antd.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Layout } from "./components";

import { CartPage, NotFoundPage, ProductDetailPage, SectionPage, StorePage } from "./pages";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Routes>
        <Route path='*' element={<NotFoundPage />}/>

        <Route path='/' element={<StorePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/detail/:id' element={<ProductDetailPage />} />
        <Route path='/section/:id' element={<SectionPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
