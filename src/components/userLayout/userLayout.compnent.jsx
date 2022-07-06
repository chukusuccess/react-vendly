import {
  UserOutlined,
  ShoppingOutlined,
  AccountBookOutlined,
  LineChartOutlined,
  QuestionCircleOutlined,
  LoginOutlined,
  MailOutlined,
  FileSearchOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Layout, Avatar, Menu, Input, Button } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

import "./userLayout.styles.less";
const { Header, Sider, Content } = Layout;
const { Item, SubMenu } = Menu;

export const UserLayout = () => {
  return (
    <Layout>
      <Sider
        style={{
          backgroundColor: "white",
          height: "100vh",
          boxShadow: "0px 0px 8px 2px rgba(7, 7, 136, 0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "48px",
          }}
        >
          <Avatar size={100} icon={<UserOutlined />} />
          <h1 style={{ textAlign: "center", fontSize: "24px" }}>
            Tronix Africa
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid rgba(222, 222, 222, 0.98)",
          }}
        >
          <p icon={<UserOutlined />}>20</p>
          <p icon={<UserOutlined />}>200</p>
        </div>
        <div>
          <Menu mode="inline" defaultSelectedKeys={1}>
            <Item icon={<ShoppingOutlined />} key={1}>
              Product
            </Item>
            <Item icon={<AccountBookOutlined />}>Account</Item>
            <Item icon={<LineChartOutlined />}>Insight</Item>
            <SubMenu title="Help & Feedback" icon={<QuestionCircleOutlined />}>
              <Item icon={<MailOutlined />}>Contact us</Item>
              <Item icon={<FileSearchOutlined />}>FAQ</Item>
            </SubMenu>
            <Item icon={<LoginOutlined />}>Log out</Item>
          </Menu>
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Input
              size="large"
              placeholder="Search products"
              prefix={<SearchOutlined />}
            />
          </div>
          <div>
            <Button type="primary">Create Product</Button>
          </div>
        </Header>
        <Content>
          <div>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
