import { Card, Button, List } from "antd";
import React from "react";
import "./product-details.styles.less";

const data = [
  {
    title: "Name",
  },
  {
    title: "Price",
  },
  {
    title: "Location",
  },
  {
    title: "Product Category",
  },
  {
    title: "Description",
  },
];

export const ProductDetails = () => {
  return (
    <div>
      <Card
        style={{ width: "100%", overflow: "hidden", overflowY: "scroll" }}
        title="PRODUCT DETAILS"
      >
        <div
          style={{
            border: "none",
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-around",
          }}
        >
          <Card
            style={{
              width: 300,

              border: "none",
            }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          ></Card>
        </div>

        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua."
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};
