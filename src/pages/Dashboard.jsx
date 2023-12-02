import React from "react";
import CreditScore from "../Components/CreditScoreChart";
import '../Css/Dashboard.css';

// Define a mapping for the scores to grades and their descriptions
const gradeMappings = {
  1: { grade: 'A1', riskLevel: 'Lowest', description: 'Borrowers in this category are considered to have the best credit profiles. They usually have high credit scores, stable and sufficient income, a long credit history, and low debt-to-income ratios.', interestRates: 'Lowest among all grades, reflecting the lower risk.' },
  2: { grade: 'A2', riskLevel: 'Lowest', description: 'Borrowers with A2 ratings have very good credit profiles, just slightly below those with A1 ratings.', interestRates: 'Very low, reflecting the low risk.' },
  3: { grade: 'A3', riskLevel: 'Lowest', description: 'Borrowers in this category are considered to have excellent credit profiles, with only minor differences from A1 and A2.', interestRates: 'Lowest among all grades, reflecting the lower risk.' },
  4: { grade: 'A4', riskLevel: 'Lowest', description: 'These borrowers have high credit scores and strong credit histories, though they may have some small factors that differentiate them from the highest ratings.', interestRates: 'Low, reflecting the low risk.' },
  5: { grade: 'A5', riskLevel: 'Lowest', description: 'A5 borrowers have strong credit profiles with some factors that are not as ideal as A1-A4, but still reflect a low risk.', interestRates: 'Low, reflecting the low risk.' },
  6: { grade: 'B1', riskLevel: 'Low to Moderate', description: 'Borrowers have good credit profiles, not as strong as Grade A. They might have slightly lower credit scores or shorter credit history.', interestRates: 'Moderate, reflecting the slightly higher risk than grade A.' },
  7: { grade: 'B2', riskLevel: 'Low to Moderate', description: 'B2 borrowers are similar to B1 but may have additional minor credit issues that do not significantly increase risk.', interestRates: 'Moderate, slightly higher than Grade A due to increased risk.' },
  8: { grade: 'B3', riskLevel: 'Low to Moderate', description: 'Good credit profiles with some factors that reduce their rating compared to B1 and B2, such as a higher debt-to-income ratio.', interestRates: 'Moderately low, reflecting the low to moderate risk.' },
  9: { grade: 'B4', riskLevel: 'Low to Moderate', description: 'B4 grade reflects a good credit profile with more significant issues than B1-B3, possibly including lower credit scores.', interestRates: 'Moderate, higher than the best grades due to slightly increased risk.' },
  10: { grade: 'B5', riskLevel: 'Low to Moderate', description: 'Borrowers in this grade have a good credit profile but with factors that warrant the lowest subgrade within the B category.', interestRates: 'Moderate, higher than B1-B4.' },
  11: { grade: 'C1', riskLevel: 'Moderate', description: 'These borrowers have fair credit profiles, potentially with some late payments or other issues affecting their credit.', interestRates: 'Moderately high, reflecting the moderate risk.' },
  12: { grade: 'C2', riskLevel: 'Moderate', description: 'C2 borrowers have fair credit profiles, often with a few significant credit issues such as higher debt levels.', interestRates: 'Moderately high, reflecting the increased risk.' },
  13: { grade: 'C3', riskLevel: 'Moderate', description: 'Credit profiles in this grade may show a history of late payments or other factors that increase credit risk.', interestRates: 'Moderately high, due to increased risk associated with their credit profiles.' },
  14: { grade: 'C4', riskLevel: 'Moderate', description: 'C4 grade indicates a credit profile with some issues, potentially including past delinquencies or high debt-to-income ratios.', interestRates: 'Higher, reflecting the moderate risk of lending.' },
  15: { grade: 'C5', riskLevel: 'Moderate', description: 'Borrowers with the C5 grade have fair credit profiles that may include more significant issues compared to other C grades.', interestRates: 'High, reflecting the moderate to high credit risk.' },
  16: { grade: 'D1', riskLevel: 'Moderate to High', description: 'D1 borrowers have credit profiles that indicate a history of credit issues, such as significant late payments or high debt-to-income ratios.', interestRates: 'Higher than C grade, as the risk is more pronounced.' },
  17: { grade: 'D2', riskLevel: 'Moderate to High', description: 'These borrowers may have had previous credit problems or other factors that contribute to a higher risk of default.', interestRates: 'High, reflecting the increased risk associated with their credit history.' },
  18: { grade: 'D3', riskLevel: 'Moderate to High', description: 'D3 grade suggests a credit history with significant credit issues, but not to the extent of the lowest grades.', interestRates: 'High, due to the heightened risk of lending.' },
  19: { grade: 'D4', riskLevel: 'Moderate to High', description: 'Credit profiles in this grade have various issues, potentially including past defaults or recoveries.', interestRates: 'Higher than D1-D3, reflecting the increased risk.' },
  20: { grade: 'D5', riskLevel: 'Moderate to High', description: 'D5 is the lowest subgrade within the D category, indicating borrowers with a higher likelihood of credit problems.', interestRates: 'High, reflecting their credit risk.' },
  21: { grade: 'E1', riskLevel: 'High', description: 'Borrowers in this category have lower credit scores and may have significant blemishes on their credit reports.', interestRates: 'Quite high, reflecting the high risk of default.' },
  22: { grade: 'E2', riskLevel: 'High', description: 'E2 borrowers often have significant credit issues, including lower credit scores and major derogatory records.', interestRates: 'Quite high, due to the higher risk they pose.' },
  23: { grade: 'E3', riskLevel: 'High', description: 'This grade indicates a high risk due to factors like past delinquencies or high debt levels.', interestRates: 'Very high, reflecting the significant risk of default.' },
  24: { grade: 'E4', riskLevel: 'High', description: 'E4 borrowers have credit profiles that are considered high risk, often with multiple credit issues.', interestRates: 'Very high, as the risk of lending is substantial.' },
  25: { grade: 'E5', riskLevel: 'High', description: 'The lowest subgrade within the E category, indicating serious credit issues and a high risk of default.', interestRates: 'Among the highest, reflecting the serious risk.' },
  26: { grade: 'F1', riskLevel: 'Highest', description: 'F1 borrowers have very poor credit profiles, with a history of serious delinquencies or other major credit issues.', interestRates: 'Extremely high, due to the very high risk of default.' },
  27: { grade: 'F2', riskLevel: 'Highest', description: 'Credit profiles in this grade reflect serious financial difficulties, often including past defaults or bankruptcies.', interestRates: 'Extremely high, reflecting the highest risk.' },
  28: { grade: 'F3', riskLevel: 'Highest', description: 'F3 grade is assigned to borrowers with severe credit issues, indicating a very high risk of default.', interestRates: 'Extremely high, to compensate for the high risk of default.' },
  29: { grade: 'F4', riskLevel: 'Highest', description: 'These borrowers often have very low credit scores and a history of significant credit problems.', interestRates: 'At the highest levels, due to the extremely high risk.' },
  30: { grade: 'F5', riskLevel: 'Highest', description: 'F5 is the lowest subgrade within the F category, indicating extremely high risk and severe credit issues.', interestRates: 'Highest among all grades, reflecting the extreme risk.' },
  31: { grade: 'G1', riskLevel: 'Highest', description: 'G1 borrowers are those with the weakest credit profiles, often with very low credit scores and serious credit issues.', interestRates: 'Highest, due to the extreme risk they represent.' },
  32: { grade: 'G2', riskLevel: 'Highest', description: 'This grade indicates a borrower profile with extremely high risk, often due to recent bankruptcies or other severe credit problems.', interestRates: 'At the highest possible rates, reflecting the extreme risk.' },
  33: { grade: 'G3', riskLevel: 'Highest', description: 'Borrowers with a G3 rating likely have very poor credit profiles with severe financial issues.', interestRates: 'Maximum possible, reflecting the very high risk of default.' },
  34: { grade: 'G4', riskLevel: 'Highest', description: 'G4 grade reflects a credit profile with extreme credit risk, often due to a history of defaults or serious delinquencies.', interestRates: 'At peak levels, compensating for the very high risk.' },
  35: { grade: 'G5', riskLevel: 'Highest', description: 'The G5 rating is assigned to borrowers with the most severe credit issues, indicating the highest risk of default.', interestRates: 'At the absolute highest, to compensate for the extreme risk.' },
};

const Dashboard = () => {
  const creditScore = 9; // Hardcoded credit score value
  const scoreMapping = gradeMappings[creditScore];

  if (!scoreMapping) {
    return <div className="dashboard-container">Invalid credit score provided.</div>;
  }

  const { grade, riskLevel, description, interestRates } = scoreMapping;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Credit Score Dashboard</h1>
      </div>
      <div className="credit-score-chart-container">
        <CreditScore creditScore={creditScore} />
      </div>
      <div className="credit-score-explanation-container">
        <div className="credit-score-legend">
          {/* Legend with color indicators */}
        </div>
        <div className="grade-risk-level">
          <h2>{grade} Risk Level: {riskLevel}</h2>
          <p>{description}</p>
          <p>Interest Rates: {interestRates}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;