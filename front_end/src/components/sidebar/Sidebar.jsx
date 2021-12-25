import React from "react";
import {
  Home,
  DynamicFeed,
  Person,
  VolunteerActivism,
  StickyNote2,
  LocalGroceryStore,
  Sell,
  Email,
  Feedback,
  Message,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h5 className="sidebarTitle">Dashboard</h5>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <Home className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/analytics" className="link">
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Person className="sidebarIcon" />
                Products
              </li>
            </Link>
          </ul>

          <h5 className="sidebarTitle">Quick Menu</h5>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Post
            </li>

            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <Person className="sidebarIcon" />
                Users
              </li>
            </Link>

            <li className="sidebarListItem">
              <Sell className="sidebarIcon" />
              Advertising
            </li>
          </ul>

          <h5 className="sidebarTitle">Shop & Details</h5>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LocalGroceryStore className="sidebarIcon" />
              Shop
            </li>
            <li className="sidebarListItem">
              <VolunteerActivism className="sidebarIcon" />
              Donation
            </li>
            <li className="sidebarListItem">
              <StickyNote2 className="sidebarIcon" />
              Notice Board
            </li>
          </ul>

          <h5 className="sidebarTitle">Notifications</h5>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Email className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <Feedback className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <Message className="sidebarIcon" />
              Message
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
