import { Routes, Route } from "react-router-dom";
import "./App.css";

import BuyerProductDetails from "./component/buyer/BuyerProductDetails";
import OrderSummary from "./component/buyer/OrderSummary";
import OrderSummaryContact from "./component/buyer/OrderSummaryContact";
import { UserLayout } from "./components/userLayout/userLayout.compnent";
import { ProductPage } from "./components/products/products";
import { ProductDetails } from "./components/product-details/product-details";
import CreateNewProduct from "./components/createproduct/CreateNewProduct";
import EditProduct from "./components/createproduct/EditProduct";

function App() {
  return (
    <div>
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
      </Routes>
    </div>
  );
}

export default App;
