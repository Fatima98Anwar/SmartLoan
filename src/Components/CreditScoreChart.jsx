import React from "react";
import { Bar } from "react-chartjs-2";
import { calculateGrade } from "./GradeCalc";
import { getColorForGrade } from "./GetGradeColour";

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

const CreditScoreChart = ({ creditScore }) => {
  const grade = calculateGrade(creditScore);
  const labels = [calculateGrade(creditScore)]; // Label for the x-axis

  const data = {
    labels,
    datasets: [
      {
        label: "Credit Score",
        data: [creditScore], // Score based on received credit score
        backgroundColor: getColorForGrade(grade), // Color based on grade
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
          stepSize: 4, // Set interval of 5 for the x-axis labels
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
    indexAxis: "y", // Ensure the graph remains horizontal
  };

  return (
    <div className="containerStyle">
      <Bar options={options} data={data} />
    </div>
  );
};

export default CreditScoreChart;
