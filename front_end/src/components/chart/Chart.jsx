import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";

import "./chart.css";

const Chart = () => {
  let data = useSelector((state) => state.dummyChart.chartData);
  console.log(data);
  // const data = [
  //   {
  //     name: "June",
  //     cost: 40000,
  //     sales: 24000,
  //     Gross_Profit: -16000,
  //   },
  //   {
  //     name: "July",
  //     cost: 30000,
  //     sales: 13980,
  //     Gross_Profit: -16020,
  //   },
  //   {
  //     name: "August",
  //     cost: 20000,
  //     sales: 98000,
  //     Gross_Profit: 78000,
  //   },
  //   {
  //     name: "September",
  //     cost: 27800,
  //     sales: 39008,
  //     Gross_Profit: 11208,
  //   },
  //   {
  //     name: "October",
  //     cost: 18900,
  //     sales: 48000,
  //     Gross_Profit: 29100,
  //   },
  //   {
  //     name: "November",
  //     cost: 23900,
  //     sales: 38000,
  //     Gross_Profit: 14100,
  //   },
  //   {
  //     name: "December",
  //     cost: 34900,
  //     sales: 43000,
  //     Gross_Profit: 8100,
  //   },
  // ];
  return (
    <div className="chart">
      <h4 className="chartTitle">Sales & Analytics</h4>
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#0D00FF"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="cost" stroke="#00FF73" />
          <Line type="monotone" dataKey="Gross_Profit" stroke="#FF0464" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
