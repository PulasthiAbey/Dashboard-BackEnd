import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setChartData } from "./redux/actions/chartActions";

import SideBar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const updateReduxStore = () => {
    const data = [
      {
        name: "June",
        cost: 40000,
        sales: 24000,
        Gross_Profit: -16000,
      },
      {
        name: "July",
        cost: 30000,
        sales: 13980,
        Gross_Profit: -16020,
      },
      {
        name: "August",
        cost: 20000,
        sales: 98000,
        Gross_Profit: 78000,
      },
      {
        name: "September",
        cost: 27800,
        sales: 39008,
        Gross_Profit: 11208,
      },
      {
        name: "October",
        cost: 18900,
        sales: 48000,
        Gross_Profit: 29100,
      },
      {
        name: "November",
        cost: 23900,
        sales: 38000,
        Gross_Profit: 14100,
      },
      {
        name: "December",
        cost: 34900,
        sales: 43000,
        Gross_Profit: 8100,
      },
    ];
    dispatch(setChartData(data));
  };

  useEffect(() => {
    updateReduxStore();
  }, []);

  return (
    <div className="App">
      <TopBar />
      <div className="app-container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
};

export default App;
