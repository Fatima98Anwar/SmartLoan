import React from "react";
import CreditScore from "../Components/CreditScoreChart";
import ScoreInfo from "../Components/ScoreInfo";

export const Dashboard = () => {
  return (
    <div className="credit-score">
      <ScoreInfo creditScore={3} />
      <CreditScore creditScore={3} />
    </div>
  );
};

export default Dashboard;

/*
import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class CreditScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCreditScore: 5.0, // Replace with the actual user's credit score received from scoring.py
    };
  }

  // Function to calculate the grade based on the user's credit score
  calculateGrade(score) {
    if (score >= 1 && score <= 5) {
      return "A";
    } else if (score >= 6 && score <= 10) {
      return "B";
    } else if (score >= 11 && score <= 15) {
      return "C";
    } else if (score >= 16 && score <= 20) {
      return "D";
    } else if (score >= 21 && score <= 25) {
      return "E";
    } else if (score >= 26 && score <= 30) {
      return "F";
    } else {
      return "Unknown";
    }
  }

  render() {
    const { userCreditScore } = this.state;
    const userGrade = this.calculateGrade(userCreditScore);

    const options = {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "User Credit Score",
      },
      axisX: {
        title: "Grade",
        labelFontSize: 15,
      },
      axisY: {
        title: "Credit Score",
        minimum: 1,
        maximum: 35,
      },
      data: [
        {
          type: "bar",
          dataPoints: [
            {
              x: 1, // Set the x-coordinate to 1 to create a vertical bar
              y: userCreditScore,
              label: userGrade,
              color: this.getColorForGrade(userGrade),
            },
          ],
          height: 50,
        },
      ],
    };

    return (
      <div className="position">
        <CanvasJSChart options={options} />
      </div>
    );
  }

  getColorForGrade(grade) {
    // Define your color mapping logic here based on the grade
    // You can assign colors to each grade as needed
    switch (grade) {
      case "A":
        return "#4CAF50"; // Green for Grade A
      case "B":
        return "#FFEB3B"; // Yellow for Grade B
      case "C":
        return "#FF9800"; // Orange for Grade C
      case "D":
        return "#FF5722"; // Deep Orange for Grade D
      case "E":
        return "#F44336"; // Red for Grade E
      case "F":
        return "#9C27B0"; // Purple for Grade F
      default:
        return "#000000"; // Default color for Unknown
    }
  }
}

export default CreditScore;
*/
