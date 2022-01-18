import React from "react";

import "./Line-chart.scss";

function LineChart(props) {
  return (
    <div className="chart-container">
      <canvas id="line-chart"></canvas>
    </div>
  );
}

export default LineChart;
