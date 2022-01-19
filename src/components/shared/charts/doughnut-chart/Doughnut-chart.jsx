import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

import "./Doughnut-chart.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function DoughnutChart(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  };
  const data = {
    labels: props.labels,
    datasets: [
      {
        data: props.data,
        backgroundColor: props.backgroundColors,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Doughnut options={options} data={data} />
    </div>
  );
}

export default DoughnutChart;
