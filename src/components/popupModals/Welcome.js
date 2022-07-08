import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { dummyData } from "../data/dummyData";

const { ...data } = dummyData;

// const data = (dummyData) => {
//     dummyData.map((items) => (
//         <Welcome />
//     ))
// }

export const Welcome = () => {
  return (
    <div className="w-full flex items-center justify-center h-[100vh] text-center bg-white-400 p-6">
      <div
        key={1}
        style={{
          position: "absolute",
          minHeight: "400",
          minWidth: "200",
        }}
      >
        <p className="text-lg font-semibold mt-5">{data[0]?.title}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={data[0]?.img} alt="" />
        </div>
        <div>{data[0]?.desc1}</div>
        <div className="px-20">{data[0]?.desc2}</div>
        <Link to="/addproduct">
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
        </Link>
      </div>
    </div>
  );
};
