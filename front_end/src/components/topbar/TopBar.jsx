/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "./topbar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <Link to="/" className="link">
          <div className="topLeft">
            {/* <img className="logoImage" src={require("../assets/images/icon.png")} /> */}
            <span className="logo">SolitarIT</span>
          </div>
        </Link>
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
          <img
            className="topAvatar"
            src={require("../assets/images/avatar.jpg")}
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
