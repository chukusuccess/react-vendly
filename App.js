import { Routes, Route } from "react-router-dom";
import "./App.css";

import BuyerProductDetails from "./component/buyer/BuyerProductDetails";
import OrderSummary from "./component/buyer/OrderSummary";
import OrderSummaryContact from "./component/buyer/OrderSummaryContact";
import { UserLayout } from "./components/userLayout/userLayout.compnent";
import { ProductPage } from "./components/new-product-page/new-product-file";
import { ProductDetails } from "./components/product-details/product-details";
import { SignUp } from "./components/signUp/SignUp";
import { Login } from "./components/signUp/Login";
import CreateNewProduct from "./components/createproduct/CreateNewProduct";
import EditProduct from "./components/createproduct/EditProduct";
import { useState } from "react";
import ProductModal from "./components/popupModals/ProductModal";
import { useContext } from "react";
import { ProductModalContext } from "./context/ProductModalContext";

function App() {
  const { modal, setModal } = useContext(ProductModalContext);
  return (
    <div className="relative">
      <div
        className={`h-[100vh] w-full bg-black fixed top-0 z-10 ${
          modal ? "block" : "hidden"
        }`}
        style={{ background: "rgba(0, 0, 0, 0.800)" }}
        onClick={() => setModal(false)}
      >
        <ProductModal />
      </div>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* nest other routes in here */}
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/addproduct" element={<CreateNewProduct />} />
          <Route path="/editproduct" element={<EditProduct />} />
        </Route>
        <Route path="precious/product/:id" element={<BuyerProductDetails />} />
        <Route path="/order_summary_delivery" element={<OrderSummary />} />
        <Route path="/order_summary" element={<OrderSummaryContact />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
