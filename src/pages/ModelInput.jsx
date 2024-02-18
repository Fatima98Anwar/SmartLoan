import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Css/ModelInput.css';

const ModelInput = () => {
  const navigate = useNavigate(); // Hook for navigation, called inside the component

  const location = useLocation();
  const rawJson = location.state?.rawJson;
  const dataFetchedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(false); // State to track loading status

  const initialData = rawJson || {
    "loan_amnt": "missing",
    "term": 9,
    "int_rate": 7,
    "installment": 1000,
    "annual_inc": "missing",
    "dti": "missing",
    "earliest_cr_line": "missing",
    "open_acc": "missing",
    "pub_rec": "missing",
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
    "purpose_other": true,
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

  const uploadAndFetchJSON = async () => {
    setIsLoading(true); // Set loading to true while the request is in progress
  
    try {
      const response = await fetch('http://localhost:6901/process_json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(data), // Correctly format the body as a JSON string
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const rep_data = await response.json();
      setData(rep_data);
    } catch (error) {
      console.error('Upload error:', error);
      setData(  {
        "loan_amnt": "missing",
        "term": 9,
        "int_rate": 7,
        "installment": 1000,
        "annual_inc": "missing",
        "dti": "missing",
        "earliest_cr_line": "missing",
        "open_acc": "missing",
        "pub_rec": "missing",
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
        "purpose_other": true,
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
      });
    } finally {
      setIsLoading(false); // Set loading to false when the request is completed
    }
  };
  


  const [data, setData] = useState(initialData);
  useEffect(() => {
    // run something every time name changes
    console.log(data);
  }, [data]); // <-- dependency array
  const purposeOptions = [
    "credit_card", "debt_consolidation", "educational", "home_improvement",
    "house", "major_purchase", "medical", "moving", "other", 
    "renewable_energy", "small_business", "vacation", "wedding"
  ];

  const homeOwnerShipOptions = [
    'OWN', 'RENT', 'OTHER'
  ]
  const handleHomeOwnershipChange = (selectedStatus) => {
    const updatedData = {...data};
    homeOwnerShipOptions.forEach(status => {
      updatedData[`home_ownership_${status}`] = status === selectedStatus;
    });

    setData(updatedData);
  };
  const handlePurposeLoad = () => {
    let selectedPurpose = null;
  
    // Iterate over data to find the selected purpose
    Object.keys(data).forEach(key => {
      if (key.startsWith('purpose_') && data[key] === true) {
        selectedPurpose = key.replace('purpose_', '');
      }
    });
  
    if (selectedPurpose) {
      // If a purpose is found, update the dropdown's value
      const purposeDropdown = document.querySelector('.display-json-value-purpose'); // Make sure this selector correctly identifies your dropdown
      if (purposeDropdown) {
        purposeDropdown.value = selectedPurpose;
      }
    }
  };

  const handleHomeOwnershipLoad = () => {
    let selectedPurpose = null;
  
    // Iterate over data to find the selected purpose
    Object.keys(data).forEach(key => {
      if (key.startsWith('home_ownership_') && data[key] === true) {
        selectedPurpose = key.replace('home_ownership_', '');
      }
    });
  
    if (selectedPurpose) {
      // If a purpose is found, update the dropdown's value
      const purposeDropdown = document.querySelector('.display-json-value-ownership'); // Make sure this selector correctly identifies your dropdown
      if (purposeDropdown) {
        purposeDropdown.value = selectedPurpose;
      }
    }
  };

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
  };

  const processData = (inputData) => {
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
    if (annualInc !== 'missing') {
      if (installment !== 'missing') {
        updatedData.dti = ((installment * 12) / annualInc) * 100;
      } else if (loanAmnt !== 'missing') {
        updatedData.dti = (loanAmnt / annualInc) * 100;
      }
    }
  
    // Process other fields
    Object.keys(updatedData).forEach(key => {
      if ((key.startsWith('purpose_') || key.startsWith('home_ownership_')) && updatedData[key] === 'missing') {
        updatedData[key] = false;
      }

      // if ((key.startsWith('purpose_') || key.startsWith('home_ownership_')) && updatedData[key] === true) {
      //   updatedData[key] = true;
      // }
      
      
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
      if(key.startsWith('earliest_cr_line')) {
        updatedData[key] = 0;
      }
      if(key.startsWith('open_acc')) {
        updatedData[key] = 1;
      }
      if(key.startsWith('total_acc')) {
        updatedData[key] = 1;
      }
      if(key.startsWith('pub_rec')) {
        updatedData[key] = 0;
      }
      

    });

    return updatedData;
  };
  const validateInputs = () => {
    // Check if any field in data is 'missing'
    const isAnyFieldMissing = Object.values(data).some(value => value === 'missing');
  
    // Check if any dropdown is set to '-'
    const isAnyDropdownDefault = document.querySelector('.display-json-value-purpose').value === '-' ||
                                 document.querySelector('.display-json-value-ownership').value === '-';
  
    if (isAnyFieldMissing || isAnyDropdownDefault) {
      alert('Please fill in all the fields.');
      return false; // validation failed
    }
  
    return true; // validation passed
  };

  useEffect(() => {

    const processedData = processData(data);
    setData(processedData);
    handlePurposeLoad();
    handleHomeOwnershipLoad();

    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    uploadAndFetchJSON();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-circle"></div>
      </div>
    );
  }
  return (
    <div className="content-container">
    <div className="display-json-container">
      <h2 className="display-json-title">Validate Fields</h2>

      <div className="display-json-details">
        {/* Render fields except purpose and specified fields */}
        {Object.entries(data).filter(([key, val]) => 
          !key.startsWith('home_ownership_') &&
          !key.startsWith('purpose_') &&
          key !== 'open_acc' &&
          key !== 'total_acc' &&
          key !== 'pub_rec' &&
          key !== 'dti' &&
          key !== 'earliest_cr_line' &&
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
          <span className="display-json-key">Purpose:</span>
          <select
            onChange={(e) => handlePurposeChange(e.target.value)}
            className="display-json-value-purpose"
          >
            <option key={0} value={"-"}>-</option>

            {purposeOptions.map((purpose, index) => (
              <option key={index + 1} value={purpose}>{purpose.split('_').join(' ').toUpperCase()}</option>
            ))}
          </select>
        </div>

        {/* Dropdown for ownership */}
        <div className="display-json-item">
          <span className="display-json-key">Home Ownership Status:</span>
          <select
            onChange={(e) => handleHomeOwnershipChange(e.target.value)}
            className="display-json-value-ownership"

          >
            <option key={0} value={"-"}>-</option>

            {homeOwnerShipOptions.map((status, index) => (
              <option key={index + 1} value={status}>{status.split('_').join(' ').toUpperCase()}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="button-container">
        <button 
          className="process-data-button"
          onClick={() => {
            if (validateInputs()) {
              navigate('/dashboard', { state: { rawJson: data } });

              console.log('Inputs are valid. Processing data...');
            }
          }}
        >
          Process Data
        </button>

      </div>
    </div>
  </div>
  );
};

export default ModelInput;