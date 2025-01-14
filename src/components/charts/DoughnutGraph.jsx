"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutGraph = ({ labels, input, label, colors }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: input,
        backgroundColor: colors,
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default DoughnutGraph;
