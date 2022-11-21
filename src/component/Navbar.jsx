import React from "react";
import { Avatar, Typography, Menu } from "antd";
import { Link } from "react-router-dom";
import logo from "../images/cryptocurrency.png";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  // MenuOutlined
  return (
    <div className="fixed  m-0 bg-cyan-600 left-0 h-[100vh] ">
      <div className="bg-cyan-600 flex p-[20px] items-center w-full">
        <Avatar src={logo} size="large" />
        <Typography.Title level={2} className="ml-[15px]">
          <Link to="/Home">Crypto Matrix </Link>
        </Typography.Title>
      </div>
      <Menu theme="dark" className="bg-cyan-600">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/Home">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
