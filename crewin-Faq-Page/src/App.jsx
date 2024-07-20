import React, { useState } from "react";
import { Button, Flex, Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Sidebar from "./components/sidebar";
import Customheader from "./components/header";
import MainContent from "./components/MainContent";
import Footer from './components/Footer';

import "./App.css";

const { Sider, Header, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        <Sidebar />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="trigger-btn"
        />
      </Sider>
      <Layout>
        <Header className="header">
          <Customheader />
        </Header>
        <Content className="content">
          <Flex gap="large">
            <MainContent />
            
          </Flex>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default App;
