"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const GaugeChart = ({ labels, input, stats, backgroundColor }) => {
  console.log("backgroundColors :>> ", backgroundColor);
  const percentage = input[0];
  const remaining = 100 - percentage;

  const data = {
    labels: labels,
    datasets: [
      {
        data: [percentage, remaining],
        backgroundColor: backgroundColor,
        borderWidth: 0,
        cutout: "75%",
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    rotation: -90,
    circumference: 180,
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          textAlign: "center",
          marginTop: "-180px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {percentage}%
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {stats.map((stat) => (
          <p key={stat.id}>
            {stat.title} : {stat.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default GaugeChart;
