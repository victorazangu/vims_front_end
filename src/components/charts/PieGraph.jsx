"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieGraph = ({ labels, input, label, colors }) => {
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

  return <Pie data={data} />;
};

export default PieGraph;
