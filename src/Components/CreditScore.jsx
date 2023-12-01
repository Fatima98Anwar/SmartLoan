import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // No need for a legend for a single dataset
    },
    title: {
      display: true,
      text: "Credit Score Chart",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Credit Score",
      },
      min: 1, // Start at score of 1
      max: 35, // End at score of 35
      ticks: {
        stepSize: 5, // Set interval of 5 for the x-axis labels
        autoSkip: false,
        callback: function (value, index, values) {
          // Show only integers (without decimals)
          if (value % 1 === 0) {
            return value;
          }
        },
      },
    },
    y: {
      title: {
        display: true,
        text: "Grade",
      },
      ticks: {
        autoSkip: false,
      },
    },
  },
};

const getColorForGrade = (grade) => {
  // Define your color mapping logic here based on the grade
  // You can assign colors to each grade as needed
  switch (grade) {
    case "A1":
      return "#4CAF50"; // Green for Grade A
    case "A2":
      return "#4CAF50";
    case "A3":
      return "#4CAF50";
    case "A4":
      return "#4CAF50";
    case "A5":
      return "#4CAF50";
    case "B1":
      return "#FFEB3B"; // Yellow for Grade B
    case "B2":
      return "#FFEB3B";
    case "B3":
      return "#FFEB3B";
    case "B4":
      return "#FFEB3B";
    case "B5":
      return "#FFEB3B";
    case "C1":
      return "#FF9800"; // Orange for Grade C
    case "C2":
      return "#FF9800";
    case "C3":
      return "#FF9800";
    case "C4":
      return "#FF9800";
    case "C5":
      return "#FF9800";
    case "D1":
      return "#FF5722"; // Deep Orange for Grade D
    case "D2":
      return "#FF5722";
    case "D3":
      return "#FF5722";
    case "D4":
      return "#FF5722";
    case "D5":
      return "#FF5722";
    case "E1":
      return "#F44336"; // Red for Grade E
    case "E2":
      return "#F44336";
    case "E3":
      return "#F44336";
    case "E4":
      return "#F44336";
    case "E5":
      return "#F44336";
    case "F1":
      return "#9C27B0"; // Purple for Grade F
    case "F2":
      return "#9C27B0";
    case "F3":
      return "#9C27B0";
    case "F4":
      return "#9C27B0";
    case "F5":
      return "#9C27B0";
    case "G1":
      return "#000000"; // black for Grade G
    case "G2":
      return "#000000";
    case "G3":
      return "#000000";
    case "G4":
      return "#000000";
    case "G5":
      return "#000000";
    default:
      return "#9E9E9E"; // grey for Unknown
  }
};

const labels = ["B4"]; // Label for the x-axis

const data = {
  labels,
  datasets: [
    {
      label: "Credit Score",
      data: [9], // Score for 'B4'
      backgroundColor: getColorForGrade("B4"), // Color for 'B' grade
    },
  ],
};

const CreditScoreChart = () => {
  return <Bar options={options} data={data} />;
};

export default CreditScoreChart;
