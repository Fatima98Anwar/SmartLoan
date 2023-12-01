import React, { useState, useEffect } from 'react';
import '../Css/DisplayJSON.css';

// Initial data
const initialLoanData = {
  loan_amnt: 'null',
  term: 'Nine months',
  int_rate: '35.99%',
  installment: 'PKR.. 1000 to be paid per month',
  annual_inc: 'null',
  dti: 'null',
  earliest_cr_line: 'null',
  open_acc: 'null',
  pub_rec: 'null',
  revol_bal: 'null',
  revol_util: 'null',
  total_acc: 'null',
  verification_status_Source_Verified: 'null',
  verification_status_Verified: 'null',
  purpose_credit_card: 'null',
  purpose_debt_consolidation: 'null',
  purpose_educational: 'null',
  purpose_home_improvement: 'null',
  purpose_house: 'null',
  purpose_major_purchase: 'null',
  purpose_medical: 'null',
  purpose_moving: null,
  purpose_other: null,
  purpose_renewable_energy: 'null',
  purpose_small_business: 'null',
  purpose_vacation: 'null',
  purpose_wedding: 'null',
  initial_list_status_w: 'null',
  application_type_INDIVIDUAL: 'null',
  application_type_JOINT: 'null',
  home_ownership_OTHER: 'null',
  home_ownership_OWN: 'null',
  home_ownership_RENT: 'null',
};

const DisplayJSON = () => {
  // State to hold the editable attributes
  const [loanData, setLoanData] = useState(initialLoanData);

  // Effect to log changes to the console
  useEffect(() => {
    console.log('Updated loanData:', loanData);
  }, [loanData]); // This effect runs whenever loanData changes

  // Handler to update the state when an input changes
  const handleInputChange = (key, value) => {
    setLoanData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  return (
    <div className="content-container">
      <div className="display-json-container">
        <h2 className="display-json-title">OCR Response</h2>
        <div className="display-json-details">
          {Object.entries(loanData).map(([key, value]) => (
            <div key={key} className="display-json-item">
              <span className="display-json-key">{key.split('_').join(' ').toUpperCase()}:</span>
              {typeof value === 'boolean' ? (
                <select
                  value={value}
                  onChange={(e) => handleInputChange(key, e.target.value === 'true')}
                  className="display-json-value"
                >
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              ) : (
                <input
                  type="text"
                  value={value !== 'null' ? value : ''}
                  placeholder={value === 'null' ? 'Enter value' : undefined}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  className="display-json-value"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayJSON;