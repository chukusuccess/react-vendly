import { Button } from "antd";
import React from "react";
import { dummyData } from "../data/dummyData";

const { ...data } = dummyData;

const DelProduct = () => {
  return (
    <div className="w-full flex items-center justify-center h-[100vh] text-center bg-gray-400 p-6">
      <div
        className="border-solid border-2 border-white p-6 px-16 bg-white rounded-md"
        key={1}
      >
        <p className="text-lg font-semibold mt-5 mb-10">{data[3]?.title}</p>
        <p className="text-base">{data[3]?.desc1}</p>
        <div className="flex items-center justify-center gap-4 mt-5">
          <Button
            style={{
              // backgroundColor: "#0055D4",
              color: "red",
              borderRadius: "5px",
              border: "2px solid red",
              marginTop: "2rem",
              marginBottom: "2rem",
              // padding: "0 2rem",
            }}
          >
            DELETE
          </Button>
          <Button
            style={{
              backgroundColor: "#0055D4",
              color: "white",
              borderRadius: "5px",
              border: "none",
              marginTop: "2rem",
              marginBottom: "2rem",
              // padding: "0 2rem",
            }}
          >
            CANCEL
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DelProduct;
