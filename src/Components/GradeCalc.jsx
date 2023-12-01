export const calculateGrade = (creditScore) => {
  // Define the mapping of loan grades to their corresponding numerical scores
  const gradeMapping = {
    A1: 1,
    A2: 2,
    A3: 3,
    A4: 4,
    A5: 5,
    B1: 6,
    B2: 7,
    B3: 8,
    B4: 9,
    B5: 10,
    C1: 11,
    C2: 12,
    C3: 13,
    C4: 14,
    C5: 15,
    D1: 16,
    D2: 17,
    D3: 18,
    D4: 19,
    D5: 20,
    E1: 21,
    E2: 22,
    E3: 23,
    E4: 24,
    E5: 25,
    F1: 26,
    F2: 27,
    F3: 28,
    F4: 29,
    F5: 30,
    G1: 31,
    G2: 32,
    G3: 33,
    G4: 34,
    G5: 35,
  };

  // Find the grade corresponding to the credit score
  for (let grade in gradeMapping) {
    if (gradeMapping[grade] === creditScore) {
      return grade;
    }
  }

  // If no matching grade is found
  return "Unknown";
};
