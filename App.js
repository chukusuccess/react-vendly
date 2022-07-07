import { Routes, Route } from "react-router-dom";
import Login from "./component/auth/Login";
import SignUp from "./component/auth/SignUp";
import BuyerProductDetails from './component/buyer/BuyerProductDetails'
import OrderSummary from "./component/buyer/OrderSummary";
import OrderSummaryContact from "./component/buyer/OrderSummaryContact";

function App() {
  return (
    <div>
        <Routes>
          <Route path="precious/product/:id" element={<BuyerProductDetails/>} />
          <Route path="/order_summary_delivery" element={<OrderSummary/>} />
          <Route path="/order_summary" element={<OrderSummaryContact/>} />
          <Route path="/sign_up" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
    </div>
  );
}

export default App;
