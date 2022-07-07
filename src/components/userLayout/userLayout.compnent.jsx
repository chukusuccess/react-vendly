import {
  UserOutlined,
  ShoppingOutlined,
  AccountBookOutlined,
  LineChartOutlined,
  QuestionCircleOutlined,
  LoginOutlined,
  MailOutlined,
  FileSearchOutlined,
  // SearchOutlined,
} from "@ant-design/icons";
import { Layout, Avatar, Menu, Button } from "antd"; //import Input when we are adding the search back
import React from "react";
import { Outlet } from "react-router-dom";

import "./userLayout.styles.less";
const { Header, Sider, Content } = Layout;
const { Item, SubMenu } = Menu;

export const UserLayout = () => {
  return (
    <Layout style={{ minWidth: "100vw" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{
          backgroundColor: "white",
          height: "100vh",
          borderRight: "1px solid rgba(7, 7, 136, 0.08)",
          // boxShadow: "0px 0px 8px 2px rgba(7, 7, 136, 0.08)",
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
            justifyContent: "right",
          }}
        >
          {/* <div>
            <Input
              size="large"
              placeholder="Search products"
              prefix={<SearchOutlined />}
            />
          </div> */}
          <div>
            <Button type="primary" style={{ backgroundColor: "#0055D4" }}>
              Create Product
            </Button>
          </div>
        </Header>
        <Content style={{ backgroundColor: "white" }}>
          <div>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
