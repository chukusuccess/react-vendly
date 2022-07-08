import { Button } from "antd";
import React from "react";
import { AddIcon } from "./AddIcon";

const EditProductPage = () => {
  return (
    <div className="w-full rounded-md border-solid border-2 border-gray-200 p-3">
      <p>Add Product Media</p>
      <div className=" flex items-center justify-center border-dashed border-2 border-green-500 w-52 h-52 mt-7 rounded-md">
        <AddIcon color="#0055D4" width="30" height="30" />
      </div>
      <div className="mt-4">
        <input
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
    </div>
  );
};

export default EditProductPage;
