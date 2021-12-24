import React from "react";
import { ArrowDownwardSharp } from "@mui/icons-material";

import "./featuredInfo.css";

const featuredInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">10,000 LKR</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownwardSharp />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default featuredInfo;