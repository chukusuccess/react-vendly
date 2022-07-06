import React from "react";
import { AddIcon } from "../iconsComponent/Icons";

const CreateProduct = () => {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: "0.375rem",
        border: "2px solid rgb(229 231 235 / var(--tw-border-opacity))",
        margin: "1.25rem",
        padding: "0.75rem",
      }}
    >
      <p>Add Product Media</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px dashed rgb(34 197 94 / var(--tw-border-opacity))",
          width: "13rem",
          height: "13rem",
          marginTop: "1.75rem",
          borderRadius: "0.375rem",
        }}
        className=" 
      flex 
      items-center 
      justify-center 
      border-dashed 
      border-2 border-green-500 w-52 h-52 mt-7 rounded-md"
      >
        <AddIcon color="#0055D4" width="30" height="30" />
      </div>
      <div style={{ marginTop: "1rem"}} className="mt-4">
        <input
            style={{ width: "100%", padding: "0.5rem", borderRadius: "0.125rem", border: "2px solid rgb(229 231 235 / var(--tw-border-opacity))"}}
          className="w-full p-2 rounded-sm border-solid border-2 border-gray-200"
          type="text"
          placeholder="Enter Product Name"
        />
      </div>
      <div className="mt-4">
        <input
          className="w-full p-2 rounded-sm border-solid border-2 border-gray-200"
          type="text"
          placeholder="Enter Price"
        />
      </div>
      <div className="mt-4">
        <textarea
          className="w-full p-2 rounded-sm border-solid border-2 border-gray-200"
          cols="30"
          rows="10"
          placeholder="Enter Description"
        ></textarea>
      </div>
      <div className="flex align-middle gap-5 mt-4">
        <div className="flex-1">
          <select className="w-full p-2 rounded-sm bg-white text-gray-400 border-solid border-2 border-gray-200">
            <option value="1">Product Category</option>
            <option value="2">watches</option>
            <option value="3">jewelries</option>
          </select>
        </div>
        <div className="flex-1">
          <select className="w-full p-2 rounded-sm bg-white text-gray-400 border-solid border-2 border-gray-200">
            <option value="1">Product Category</option>
            <option value="2">watches</option>
            <option value="3">jewelries</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <select className="w-full p-2 rounded-sm bg-white text-gray-400 border-solid border-2 border-gray-200">
          <option value="1">Product Category</option>
          <option value="2">watches</option>
          <option value="3">jewelries</option>
        </select>
      </div>
      <div className="mt-9 flex justify-center">
        <button className="h-10 font-[500] px-5 m-2 text-indigo-100 bg-primary rounded-md text-[13px] flex justify-center w-[15rem] items-center drop-shadow-sm">
          SAVE PRODUCT
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;
