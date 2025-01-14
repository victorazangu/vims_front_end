"use client";
import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const BubbleGraph = ({ imput, label, backgroundColor }) => {
  const data = {
    datasets: [
      {
        label: label,
        data: imput,
        backgroundColor: backgroundColor,
      },
    ],
  };

  return <Bubble data={data} />;
};

export default BubbleGraph;
