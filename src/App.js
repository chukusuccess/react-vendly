import { Routes, Route } from "react-router-dom";
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
        </Routes>
    </div>
  );
}

export default App;
