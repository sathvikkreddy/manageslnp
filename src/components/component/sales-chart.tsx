"use client";

// components/SalesChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SalesChartProps {
  currentMonthSales: number[];
  previousMonthSales: number[];
}

export const SalesChart: React.FC<SalesChartProps> = ({
  currentMonthSales,
  previousMonthSales,
}) => {
  const data = {
    labels: Array.from(
      { length: previousMonthSales.length },
      (_, i) => `${i + 1}`
    ),
    datasets: [
      {
        label: "This Month",
        data: currentMonthSales,
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        pointRadius: 1,
        fill: false,
      },
      {
        label: "Previous Month",
        data: previousMonthSales,
        borderWidth: 1,
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        pointRadius: 1,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          boxWidth: 10,
          boxHeight: 1,
        },
      },
      title: {
        display: false,
        text: "Sales Comparison",
      },
    },
  };

  return <Line data={data} options={options} />;
};
