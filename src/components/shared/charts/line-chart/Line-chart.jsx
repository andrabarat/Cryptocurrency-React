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
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

import "./Line-chart.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function LineChart(props) {
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
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
        label: props.label,
        data: props.data,
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
        borderWidth: 2,
        pointRadius: 0,
        fill: true,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Line options={options} data={data} />
    </div>
  );
}

export default LineChart;
