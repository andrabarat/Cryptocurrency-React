import React from "react";

import "./Doughnut-chart.scss";

function DoughnutChart(props) {
  return (
    <div className="chart-container">
      <canvas id="doughnut-chart"></canvas>
    </div>
  );
}

export default DoughnutChart;
