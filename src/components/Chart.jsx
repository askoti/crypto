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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ chartData, name }) => {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };


  const labels = chartData?.map(data => new Date(data[0] * 1000).toLocaleDateString())
  const theData = {
    labels,
    datasets: [
      {
        label: `${name} Chart Data`,
        data: chartData?.map(data => data[1]),
        borderColor: "#fff",
        backgroundColor: "#fff",
        yAxisID: "y",
      },
    ]
  };
  return <Line options={options} data={theData} width={100} height={'2000vh'}/>;
};

export default Chart;
