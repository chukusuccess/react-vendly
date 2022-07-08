import { Button } from "antd";
import React from "react";
import { AddIcon } from "../AddIcon";

export const AccountPage = () => {
  return (
    <div className="p-8">
      <p className="text-xl font-semibold mb-5">PROFILE</p>
      <div className="border-2 border-solid border-gray-200 rounded-lg p-3">
        <div className="border-2 border-dashed border-blue-400 bg-gray-200 w-52 h-52 m-auto rounded-full mt-6 flex items-center justify-end ">
          <AddIcon color="#0055D4" width="30" height="30" />
        </div>
        <div className="mt-10">
          <input
            className="w-full p-2 rounded-sm border-solid border-2 border-gray-200"
            type="text"
            placeholder="Enter Full Name"
          />
        </div>
        <div className="mt-4">
          <input
            className="w-full p-2 rounded-sm border-solid border-2 border-gray-200"
            type="text"
            placeholder="Enter Email Address"
          />
        </div>
        <div className="flex items-center mt-4">
          <div className="">
            <select className="p-[.6rem] rounded-sm bg-white text-gray-400 border-solid border-2 border-gray-200">
              <option value="1">+234</option>
              <option value="2">+1</option>
              <option value="3">+44</option>
            </select>
          </div>
          <div className="flex-1">
            <input
              className="w-full p-2 rounded-sm border-solid border-2 border-gray-200"
              type="text"
              placeholder="Enter Phone Number"
            />
          </div>
        </div>
        <div className="mt-9 flex justify-center">
          <Button
            style={{
              backgroundColor: "blue",
              color: "white",
              borderRadius: "5px",
              border: "none",
              paddingRight: "2rem",
              paddingLeft: "2rem",
            }}
          >
            SAVE
          </Button>
        </div>
      </div>
    </div>
  );
};

