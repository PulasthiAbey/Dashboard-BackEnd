import React from "react";
import {
  Home,
  DynamicFeed,
  Person,
  VolunteerActivism,
  StickyNote2,
  LocalGroceryStore,
  Sell,
} from "@mui/icons-material";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h5 className="sidebarTitle">Dashboard</h5>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Home />
              Home
            </li>
            <li className="sidebarListItem">
              <DynamicFeed />
              Post Management
            </li>
            <li className="sidebarListItem">
              <Person />
              User Management
            </li>
            <li className="sidebarListItem">
              <VolunteerActivism />
              Donation Management
            </li>
            <li className="sidebarListItem">
              <StickyNote2 />
              Notice Board
            </li>
            <li className="sidebarListItem">
              <LocalGroceryStore />
              Shop
            </li>
            <li className="sidebarListItem">
              <Sell />
              Advertising
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
