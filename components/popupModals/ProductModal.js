import React from "react";

const ProductModal = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center p-4 bg-gray-600 bg-transparent">
      <div
        className="w-full text-center p-5 rounded-lg flex flex-col sm:mx-96 mx-4"
        style={{ backgroundColor: "#0055D4" }}
      >
        <div className="p-10 font-semibold text-white hover:bg-white hover:text-blue-600">
          SHARE
        </div>
        <div className=" p-10 font-semibold text-white hover:bg-white hover:text-blue-600">
          EDIT
        </div>
        <div className="p-10 font-semibold text-white hover:bg-white hover:text-blue-600 ">
          DELETE
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
