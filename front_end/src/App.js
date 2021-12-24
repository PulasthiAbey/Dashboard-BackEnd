import React from "react";
import SideBar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";

import "./App.css";

const App = () => {
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
