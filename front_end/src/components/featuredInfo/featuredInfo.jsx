import React from "react";
import { ArrowDownwardSharp, ArrowUpwardSharp } from "@mui/icons-material";

import "./featuredInfo.css";

const featuredInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">10,000 LKR</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownwardSharp className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">25,000 LKR</span>
          <span className="featuredMoneyRate">
            -1.2 <ArrowDownwardSharp className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">15,000 LKR</span>
          <span className="featuredMoneyRate">
            +2.5 <ArrowUpwardSharp className="featuredIcon" positive />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default featuredInfo;
