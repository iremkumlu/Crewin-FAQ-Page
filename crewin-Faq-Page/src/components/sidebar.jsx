import React from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined,
  QuestionCircleOutlined // Yeni eklenen icon
} from "@ant-design/icons";

const Sidebar = () => {
  return (
    <>
      <div className="logo">
        <QuestionCircleOutlined style={{ fontSize: '36px', color: '#003a8c' }} />
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Dashboard",
          },
          {
            key: "2",
            icon: <CarryOutOutlined />,
            label: "Home Page",
          },
          {
            key: "3",
            icon: <OrderedListOutlined />,
            label: "About",
          },
          {
            key: "4",
            icon: <ProfileOutlined />,
            label: "Contact",
          },
          {
            key: "5",
            icon: <SettingOutlined />,
            label: "Setting",
          },
          {
            key: "6",
            icon: <LogoutOutlined />,
            label: "Logout",
          },
        ]}
      />
    </>
  );
};

export default Sidebar;