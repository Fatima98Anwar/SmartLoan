import { calculateGrade } from "./GradeCalc";

const ScoreInfo = ({ creditScore }) => {
  const grade = calculateGrade(creditScore);
  const gradeMapping = {
    A1: {
      riskLevel: "Lowest",
      characteristics:
        "Borrowers in this category are considered to have the best credit profiles. They usually have high credit scores, stable and sufficient income, a long credit history, and low debt-to-income ratios.",
      interestRates: "Lowest among all grades, reflecting the lower risk.",
    },
    A2: {
      riskLevel: "Lowest",
      characteristics:
        "Borrowers in this category are considered to have excellent credit profiles. They typically have high credit scores, stable income, and a good credit history.",
      interestRates: "Lowest among all grades, reflecting the lower risk.",
    },
    A3: {
      riskLevel: "Lowest",
      characteristics:
        "Borrowers in this category are considered to have very good credit profiles. They generally have high credit scores and a good credit history.",
      interestRates: "Lowest among all grades, reflecting the lower risk.",
    },
    A4: {
      riskLevel: "Lowest",
      characteristics:
        "Borrowers in this category are considered to have good credit profiles. They usually have high credit scores, stable income, and a decent credit history.",
      interestRates: "Lowest among all grades, reflecting the lower risk.",
    },
    A5: {
      riskLevel: "Lowest",
      characteristics:
        "Borrowers in this category are considered to have satisfactory credit profiles. They often have high credit scores and a stable financial situation.",
      interestRates: "Lowest among all grades, reflecting the lower risk.",
    },
    B1: {
      riskLevel: "Low to Moderate",
      characteristics:
        "Borrowers in this category have good credit but may not be as strong as Grade A borrowers. They might have slightly lower credit scores or shorter credit history.",
      interestRates: "Higher than Grade A, but still relatively moderate.",
    },
    B2: {
      riskLevel: "Low to Moderate",
      characteristics:
        "Borrowers in this category have good credit profiles but with some minor credit history issues. Their credit scores may be slightly lower than Grade A.",
      interestRates: "Higher than Grade A, but still relatively moderate.",
    },
    B3: {
      riskLevel: "Low to Moderate",
      characteristics:
        "Borrowers in this category have fairly good credit profiles but with minor credit issues. They may have shorter credit histories.",
      interestRates: "Higher than Grade A, but still relatively moderate.",
    },
    B4: {
      riskLevel: "Low to Moderate",
      characteristics:
        "Borrowers in this category have decent credit profiles but may have some credit history issues. Their credit scores might be moderately lower than Grade A.",
      interestRates: "Higher than Grade A, but still relatively moderate.",
    },
    B5: {
      riskLevel: "Low to Moderate",
      characteristics:
        "Borrowers in this category have credit profiles that are generally good but with notable credit issues. They may have shorter credit histories and slightly lower credit scores.",
      interestRates: "Higher than Grade A, but still relatively moderate.",
    },
    C1: {
      riskLevel: "Moderate",
      characteristics:
        "Borrowers in this category have fair credit profiles. They might have some issues in their credit history, like late payments or higher debt levels.",
      interestRates: "Higher, reflecting the increased risk.",
    },
    C2: {
      riskLevel: "Moderate",
      characteristics:
        "Borrowers in this category have credit profiles with some issues. They may have late payments or higher debt levels, leading to a moderate level of risk.",
      interestRates: "Higher, reflecting the increased risk.",
    },
    C3: {
      riskLevel: "Moderate",
      characteristics:
        "Borrowers in this category have fair credit profiles with notable credit issues. Late payments and higher debt levels may be common.",
      interestRates: "Higher, reflecting the increased risk.",
    },
    C4: {
      riskLevel: "Moderate",
      characteristics:
        "Borrowers in this category have credit profiles with significant issues. Late payments and higher debt levels are common, resulting in moderate risk.",
      interestRates: "Higher, reflecting the increased risk.",
    },
    C5: {
      riskLevel: "Moderate",
      characteristics:
        "Borrowers in this category have credit profiles with notable credit issues. Late payments and high debt levels are frequent, leading to a moderate level of risk.",
      interestRates: "Higher, reflecting the increased risk.",
    },
    D1: {
      riskLevel: "Moderate to High",
      characteristics:
        "Borrowers in this grade may have a history of credit issues, such as significant late payments, high debt-to-income ratios, or other factors that increase risk.",
      interestRates: "Higher than C grade, as the risk is more pronounced.",
    },
    D2: {
      riskLevel: "Moderate to High",
      characteristics:
        "Borrowers in this grade often have a history of credit issues, including late payments, high debt levels, and other factors that increase risk.",
      interestRates: "Higher than C grade, as the risk is more pronounced.",
    },
    D3: {
      riskLevel: "Moderate to High",
      characteristics:
        "Borrowers in this grade may have a significant history of credit issues, including substantial late payments, high debt-to-income ratios, or other factors that increase risk.",
      interestRates: "Higher than C grade, as the risk is more pronounced.",
    },
    D4: {
      riskLevel: "Moderate to High",
      characteristics:
        "Borrowers in this grade have a history of significant credit issues, such as major late payments, high debt levels, and other factors that increase risk.",
      interestRates: "Higher than C grade, as the risk is more pronounced.",
    },
    D5: {
      riskLevel: "Moderate to High",
      characteristics:
        "Borrowers in this grade often have a substantial history of credit issues, including major late payments, high debt-to-income ratios, or other factors that increase risk.",
      interestRates: "Higher than C grade, as the risk is more pronounced.",
    },
    E1: {
      riskLevel: "High",
      characteristics:
        "Borrowers in this grade often have lower credit scores and may have significant blemishes on their credit reports.",
      interestRates: "Quite high, reflecting the higher risk of default.",
    },
    E2: {
      riskLevel: "High",
      characteristics:
        "Borrowers in this grade often have lower credit scores and significant credit report blemishes, indicating a high risk of default.",
      interestRates: "Quite high, reflecting the higher risk of default.",
    },
    E3: {
      riskLevel: "High",
      characteristics:
        "Borrowers in this grade frequently have lower credit scores and notable credit issues, resulting in a high risk of default.",
      interestRates: "Quite high, reflecting the higher risk of default.",
    },
    E4: {
      riskLevel: "High",
      characteristics:
        "Borrowers in this grade have lower credit scores and significant credit report issues, signifying a high risk of default.",
      interestRates: "Quite high, reflecting the higher risk of default.",
    },
    E5: {
      riskLevel: "High",
      characteristics:
        "Borrowers in this grade have lower credit scores and substantial credit report blemishes, indicating a high risk of default.",
      interestRates: "Quite high, reflecting the higher risk of default.",
    },
    F1: {
      riskLevel: "Highest",
      characteristics:
        "Borrowers in this grade often have very low credit scores, recent bankruptcies, or other serious credit issues.",
      interestRates:
        "Highest among all grades, compensating for the high risk of default.",
    },
    F2: {
      riskLevel: "Highest",
      characteristics:
        "Borrowers in this grade frequently have very low credit scores, recent bankruptcies, or other severe credit issues.",
      interestRates:
        "Highest among all grades, compensating for the high risk of default.",
    },
    F3: {
      riskLevel: "Highest",
      characteristics:
        "Borrowers in this grade often have extremely low credit scores, recent bankruptcies, or other critical credit issues.",
      interestRates:
        "Highest among all grades, compensating for the high risk of default.",
    },
    F4: {
      riskLevel: "Highest",
      characteristics:
        "Borrowers in this grade typically have extremely low credit scores, recent bankruptcies, or other severe credit issues.",
      interestRates:
        "Highest among all grades, compensating for the high risk of default.",
    },
    F5: {
      riskLevel: "Highest",
      characteristics:
        "Borrowers in this grade have very low credit scores, recent bankruptcies, or other critical credit issues, signifying the highest level of risk.",
      interestRates:
        "Highest among all grades, compensating for the high risk of default.",
    },
    G1: {
      riskLevel: "Highest",
      characteristics:
        "Borrowers in this grade often have very low credit scores, recent bankruptcies, or other serious credit issues.",
      interestRates:
        "Highest among all grades, compensating for the high risk of default.",
    },
    G2: {
      riskLevel: "Highest",
      characteristics:
        "Borrowers in this grade frequently have very low credit scores, recent bankruptcies, or other severe credit issues.",
      interestRates:
        "Highest among all grades, compensating for the high risk of default.",
    },
    G3: {
      riskLevel: "Highest",
      characteristics:
        "Borrowers in this grade often have extremely low credit scores, recent bankruptcies, or other critical credit issues.",
      interestRates:
        "Highest among all grades, compensating for the high risk of default.",
    },
    G4: {
      riskLevel: "Highest",
      characteristics:
        "Borrowers in this grade typically have extremely low credit scores, recent bankruptcies, or other severe credit issues.",
      interestRates:
        "Highest among all grades, compensating for the high risk of default.",
    },
    G5: {
      riskLevel: "Highest",
      characteristics:
        "Borrowers in this grade have very low credit scores, recent bankruptcies, or other critical credit issues, signifying the highest level of risk.",
      interestRates:
        "Highest among all grades, compensating for the high risk of default.",
    },
  };

  const centerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // Adjust this to your preferred height
  };

  return (
    <div className="legend" style={centerStyle}>
      <div className="legend-item">
        <h3 className="grade">{grade}</h3>
        <h4 className="risk-level">
          Risk Level: {gradeMapping[grade]?.riskLevel || "Unknown"}
        </h4>
        <p className="characteristics">
          {gradeMapping[grade]?.characteristics ||
            "No information available for this grade."}
        </p>
        <div className="interest-rates">
          Interest Rates: {gradeMapping[grade]?.interestRates || "Unknown"}
        </div>
      </div>
    </div>
  );
};

export default ScoreInfo;
