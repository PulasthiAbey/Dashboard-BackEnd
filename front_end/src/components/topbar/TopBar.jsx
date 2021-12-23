/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

import "./topbar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SolitarIT</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img className="topAvatar" src="../assets/images/avatar.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
