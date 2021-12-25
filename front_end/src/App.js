import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setChartData,
  setChartTitle,
  setChartLineName,
} from "./redux/actions/chartActions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import SideBar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/userPage/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Chart from "./components/chart/Chart";

const App = () => {
  const dispatch = useDispatch();
  const updateReduxStore = () => {
    const data = [
      {
        name: "June",
        COST: 40000,
        SALES: 24000,
        GP: -16000,
      },
      {
        name: "July",
        COST: 30000,
        SALES: 13980,
        GP: -16020,
      },
      {
        name: "August",
        COST: 20000,
        SALES: 98000,
        GP: 78000,
      },
      {
        name: "September",
        COST: 27800,
        SALES: 39008,
        GP: 11208,
      },
      {
        name: "October",
        COST: 18900,
        SALES: 48000,
        GP: 29100,
      },
      {
        name: "November",
        COST: 23900,
        SALES: 38000,
        GP: 14100,
      },
      {
        name: "December",
        COST: 34900,
        SALES: 43000,
        GP: 8100,
      },
    ];
    const chartName = "Sales & Analytics";
    const chartLineName = ["SALES", "COST", "GP"];
    dispatch(setChartData(data));
    dispatch(setChartTitle(chartName));
    dispatch(setChartLineName(chartLineName));
  };

  useEffect(() => {
    updateReduxStore();
  });

  return (
    <div className="App">
      <Router>
        <TopBar />
        <div className="app-container">
          <SideBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
            <Route path="/analytics" element={<Chart />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
