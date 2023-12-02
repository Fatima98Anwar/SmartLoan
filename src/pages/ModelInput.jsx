import React, { useState, useEffect } from 'react';
import '../Css/ModelInput.css';
const ModelInput = () => {
  const initialData = {
    "loan_amnt": 50000,
    "term": 9,
    "int_rate": 7,
    "installment": 1000,
    "annual_inc": "missing",
    "dti": "missing",
    "earliest_cr_line": "missing",
    "open_acc": "missing",
    "pub_rec": "missing",
    "revol_bal": "missing",
    "revol_util": "missing",
    "total_acc": "missing",
    "verification_status_Source Verified": "missing",
    "verification_status_Verified": "missing",
    "purpose_credit_card": "missing",
    "purpose_debt_consolidation": "missing",
    "purpose_educational": "missing",
    "purpose_home_improvement": "missing",
    "purpose_house": "missing",
    "purpose_major_purchase": "missing",
    "purpose_medical": "missing",
    "purpose_moving": "missing",
    "purpose_other": "missing",
    "purpose_renewable_energy": "missing",
    "purpose_small_business": "missing",
    "purpose_vacation": "missing",
    "purpose_wedding": "missing",
    "initial_list_status_w": "missing",
    "application_type_INDIVIDUAL": "missing",
    "application_type_JOINT": "missing",
    "home_ownership_OTHER": "missing",
    "home_ownership_OWN": "missing",
    "home_ownership_RENT": "missing"
  };

  const [data, setData] = useState(initialData);

  const purposeOptions = [
    "credit_card", "debt_consolidation", "educational", "home_improvement",
    "house", "major_purchase", "medical", "moving", "other", 
    "renewable_energy", "small_business", "vacation", "wedding"
  ];

  const handlePurposeChange = (selectedPurpose) => {
    const updatedData = {...data};
    purposeOptions.forEach(purpose => {
      updatedData[`purpose_${purpose}`] = purpose === selectedPurpose;
    });
    setData(updatedData);
  };
  const handleInputChange = (key, value) => {
    const newValue = value !== '' ? value : 'missing';
    setData(prevData => {
      const newData = { ...prevData, [key]: newValue };
      return processData(newData); // Process data with updated value
    });
  };const processData = (inputData) => {
    let updatedData = { ...inputData };
  
    // Convert numeric strings to numbers
    const loanAmnt = updatedData.loan_amnt !== 'missing' ? parseFloat(updatedData.loan_amnt) : 'missing';
    const term = updatedData.term !== 'missing' ? parseFloat(updatedData.term) : 'missing';
    const installment = updatedData.installment !== 'missing' ? parseFloat(updatedData.installment) : 'missing';
    const annualInc = updatedData.annual_inc !== 'missing' ? parseFloat(updatedData.annual_inc) : 'missing';
  
    // Calculate loan_amnt, installment, and term
    if (loanAmnt === 'missing' && term !== 'missing' && installment !== 'missing') {
      updatedData.loan_amnt = installment * term;
    } else if (installment === 'missing' && loanAmnt !== 'missing' && term !== 'missing') {
      updatedData.installment = loanAmnt / term;
    } else if (term === 'missing' && loanAmnt !== 'missing' && installment !== 'missing') {
      updatedData.term = loanAmnt / installment;
    }
  
    // Calculate dti
    if (updatedData.dti === 'missing' && annualInc !== 'missing') {
      if (installment !== 'missing') {
        updatedData.dti = (installment * 12) / annualInc;
      } else if (loanAmnt !== 'missing') {
        updatedData.dti = loanAmnt / annualInc;
      }
    }
  
    // Process other fields
    Object.keys(updatedData).forEach(key => {
      if ((key.startsWith('purpose_') || key.startsWith('home_ownership_')) && updatedData[key] === 'missing') {
        updatedData[key] = false;
      }
      if(key.startsWith('application_type_I')) {
        updatedData[key] = true;
      }
      if(key.startsWith('application_type_J')) {
        updatedData[key] = false;
      }
      if(key.startsWith('verification_status_')) {
        updatedData[key] = true;
      }
      if(key.startsWith('initial_list_status_w')) {
        updatedData[key] = true;
      }
    });
  
    return updatedData;
  };
  

  useEffect(() => {
    const processedData = processData(data);
    setData(processedData);
  }, []);
  useEffect(() => {
    processData(initialData); // Initial processing of data
  }, []);
  
  return (
    <div className="content-container">
    <div className="display-json-container">
      <h2 className="display-json-title">Model Input</h2>

      <div className="display-json-details">
        {/* Render fields except purpose and specified fields */}
        {Object.entries(data).filter(([key, _]) => 
          !key.startsWith('purpose_') &&
          key !== 'initial_list_status_w' &&
          key !== 'application_type_INDIVIDUAL' &&
          key !== 'application_type_JOINT' &&
          key !== 'verification_status_Source Verified' &&
          key !== 'verification_status_Verified'
        ).map(([key, value]) => (
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

        {/* Dropdown for purpose */}
        <div className="display-json-item">
          <span className="display-json-key">PURPOSE:</span>
          <select
            onChange={(e) => handlePurposeChange(e.target.value)}
            className="display-json-value"
          >
            {purposeOptions.map((purpose, index) => (
              <option key={index} value={purpose}>{purpose.split('_').join(' ').toUpperCase()}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="button-container">
        <button className="process-data-button">
          Process Data
        </button>
      </div>
    </div>
  </div>
  );
};

export default ModelInput;