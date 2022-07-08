import { Button } from "antd";
import React from "react";
import AddProduct from "../AddProduct";

const CreateNewProduct = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between m-5">
        <p>CREATE PRODUCT</p>
        <Button
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "5px",
            border: "none",
          }}
        >
          SAVE PRODUCT
        </Button>
      </div>
      <AddProduct />
    </div>
  );
};

export default CreateNewProduct;
