import React from "react";
import SideBar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <div className="app-container">
        <SideBar />
        <div className="others">Other Pages</div>
      </div>
    </div>
  );
};

export default App;
