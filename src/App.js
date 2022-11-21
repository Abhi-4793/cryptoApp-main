import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import {
  Navbar,
  Home,
  Exchanges,
  Cryptocurrencies,
  Cryptodetail,
  News,
} from "./component/import";
import "./App.css";
import { Layout, Space, Typography } from "antd";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="p-[20px]">
            <Routes>
              <Route exact path="/Home" element={<Home />}></Route>
              <Route exact path="/exchanges" element={<Exchanges />}></Route>
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              ></Route>
              <Route
                exact
                path="/crypto/:coinId"
                element={<Cryptodetail />}
              ></Route>
              <Route exact path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>

        <div
          className="bg-[#001529] flex flex-col p-[20px] items-center"
          level={5}
        >
          <Typography.Title className="text-center text-white/75">
            Crypto Matrix <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
