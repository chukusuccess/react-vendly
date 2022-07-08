import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./index.less";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ProductDetailsContextProvider from "./context/ProductDetailsContext";
import ProductModalContextProvider from "./context/ProductModalContext";
import AuthContextProvider from "./context/AuthContext";
import UploadProductContextProvider from "./context/UploadProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UploadProductContextProvider>
        <AuthContextProvider>
          <ProductModalContextProvider>
            <ProductDetailsContextProvider>
              <App />
            </ProductDetailsContextProvider>
          </ProductModalContextProvider>
        </AuthContextProvider>
      </UploadProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
