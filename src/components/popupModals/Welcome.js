import { Button } from "antd";
import React from "react";
import { dummyData } from "../data/dummyData";

const { ...data } = dummyData;

// const data = (dummyData) => {
//     dummyData.map((items) => (
//         <Welcome />
//     ))
// }

const Welcome = () => {
  return (
    <div className="w-full flex items-center justify-center h-[100vh] text-center bg-gray-400 p-6">
      <div
        className="border-solid border-2 border-white p-6 px-16 bg-white rounded-md"
        key={1}
      >
        <p className="text-lg font-semibold mt-5">{data[0]?.title}</p>
        <div>
          <img src={data[0]?.img} alt="" />
        </div>
        <div>{data[0]?.desc1}</div>
        <div>{data[0]?.desc2}</div>
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
          CREATE PRODUCT
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
