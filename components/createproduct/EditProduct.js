import { Button } from "antd";
import React from "react";
import EditProductPage from "../EditProductPage";

const EditProduct = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between m-5">
        <p>EDIT PRODUCT</p>
        <Button
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "5px",
            border: "none",
          }}
        >
          SAVE CHANGES
        </Button>
      </div>
      <EditProductPage />
    </div>
  );
};

export default EditProduct;
