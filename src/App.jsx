import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheakoutPage from "./pages/CheakoutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CommonLayouts from "./components/layouts/CommonLayouts";
import CartPage from "./pages/CartPage";

function App() {
  
  return (
    <>
      <Routes> 
        <Route element= {<CommonLayouts />}>
          <Route index element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-detail" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheakoutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes> 
    </>
  )
}

export default App
