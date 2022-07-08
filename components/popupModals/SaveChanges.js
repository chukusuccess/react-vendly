import { Button } from "antd";
import React from "react";
import { dummyData } from "../data/dummyData";


const { ...data } = dummyData;

const SaveChanges = () => {
  return (
    <div className="w-full flex items-center justify-center h-[100vh] text-center bg-gray-400 p-6">
      <div
        className="border-solid border-2 border-white p-6 px-16 bg-white rounded-md"
        key={1}
      >
        <p className="text-lg font-semibold mt-5">{data[1]?.title}</p>
        <div className="flex items-center justify-center mt-4 mb-4">
          <img src={data[1]?.img} width={100} alt="" />
        </div>
        <p className="text-sm">{data[1]?.desc1}</p>
        <Button
          style={{
            backgroundColor: "#0055D4",
            color: "white",
            borderRadius: "5px",
            border: "none",
            marginTop: "2rem",
            marginBottom: "2rem",
            padding: "0 2rem",
          }}
        >
          SHARE PRODUCT
        </Button>
      </div>
    </div>
  );
};

export default SaveChanges;
