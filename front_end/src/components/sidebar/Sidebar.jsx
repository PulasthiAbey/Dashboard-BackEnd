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
            <li className="sidebarListItem active">
              <Home className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Post
            </li>
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              User
            </li>
            <li className="sidebarListItem">
              <VolunteerActivism className="sidebarIcon" />
              Donation
            </li>
            <li className="sidebarListItem">
              <StickyNote2 className="sidebarIcon" />
              Notice Board
            </li>
            <li className="sidebarListItem">
              <LocalGroceryStore className="sidebarIcon" />
              Shop
            </li>
            <li className="sidebarListItem">
              <Sell className="sidebarIcon" />
              Advertising
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
