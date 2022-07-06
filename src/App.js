import { Routes, Route } from "react-router-dom";

import "./App.css";

import { UserLayout } from "./components/userLayout/userLayout.compnent";
import { ProductPage } from "./components/products/products";
import { CreateProduct } from "./components/create-product/create-product";
import { ProductDetails } from "./components/product-details/product-details";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        {/* nest other routes in here */}
        <Route path="/products" element={<ProductPage />} />
        <Route path="/create-products" element={<CreateProduct />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
