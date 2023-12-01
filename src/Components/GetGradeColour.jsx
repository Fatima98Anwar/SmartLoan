export const getColorForGrade = (grade) => {
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
