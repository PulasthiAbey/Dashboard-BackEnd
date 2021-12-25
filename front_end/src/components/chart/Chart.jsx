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
import { useSelector } from "react-redux";

import "./chart.css";

const Chart = () => {
  let data = useSelector((state) => state.dummyChart.chartData);
  const chartName = useSelector((state) => state.dummyChart.chartTitle);
  let chartLineName = useSelector((state) => state.dummyChart.chartLineName);

  return (
    <div className="chart">
      <h4 className="chartTitle">{chartName}</h4>
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
            dataKey={chartLineName[0]}
            stroke="#0D00FF"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey={chartLineName[1]} stroke="#00FF73" />
          <Line type="monotone" dataKey={chartLineName[2]} stroke="#FF0464" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
