import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Css/DisplayJSON.css';

// Initial data
const initialLoanData = {'Additional amount/charges for pre payment/early retirement of the loan/finance': '7% of Outstanding Principal amount+ FED will be charged in case the customer wants to opt for early repayment', 'Assistance and redress': 'Contact our 24/7 Contact Centre team at 111-111-HBL (111-111-425), Email address: customer.care@hbl.com, Head Office Address: 9th floor, Service Quality, HBL Plaza LiChundrigar Road, Karachi.', 'Default/late payment information': 'Late Payment charges will be applied', 'Documents provided': "Offer letter, Product Key fact Statement, Terms and Conditions, Amortization schedule, NOC (on customer's request)", 'Estimated cost of this financing': 'Mark-up rate (per annum)', 'Finance Amount': 'PKR, 0000', "Guarantor's obligations": 'N/A', 'In case of death of borrower': "The remaining amount will be covered by the insurance company on Bank's approved panel", 'Installmant charged': 'PKR. 12000 to be paid per year', 'Late payment charges (LPC)': 'Rate applied Rs. 1,250+ FED (per month)', 'Loan/finance can be repaid before the maturity': 'Yes', 'Mark-up rate (per annum)': '%', 'Mark-uptype (Fixed/ Variable)': 'Fixed', 'Monthly installment payable': 'PKR.. 1000 to be paid per month', 'Name of the product': 'HBL Personal Loan', 'Other charges': 'PKR. 1500', 'Processing fee': 'PKR. 5,500 or 1.25% + FED of the finance amount whichever is higher (Inclusive of documentation charges, verification & stamp duty)', 'Repayment of loan/finance before the Maturity': "Contact HBL's 24/7 Phone Banking team at 111-111-425 or visit your nearest HBL Branch and submit 7% of Outstanding Principal amount+ FED will be charged", 'Right of set-off': 'Can Bank exercise right of set-off?', 'Term of financing': 'Nine months', 'Total amount paid for the financing': 'PKR.. 20000'};
const DisplayJSON = () => {
  const [loanData, setLoanData] = useState(initialLoanData);
  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  const location = useLocation();
  const dataFetchedRef = useRef(false);
  const navigate = useNavigate(); // Hook for navigation, called inside the component

  const file = location.state?.file;

  const navigateToModelInput = () => {
    navigate('/modelinput', { state: { rawJson: initialLoanData } });
  };



  useEffect(() => { 
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
      uploadAndProcessFile(file);


  }, [])



  const uploadAndProcessFile = async (file) => {


    setIsLoading(true); // Set loading to true while the request is in progress

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:6900/perform_ocr', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setLoanData(data);
    } catch (error) {
      console.error('Upload error:', error);
      // Handle errors here
    } finally {
      setIsLoading(false); // Set loading to false when the request is completed
    }
  };



  // Handler to update the state when an input changes
  const handleInputChange = (key, value) => {
    setLoanData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

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
      <h2 className="display-json-title">OCR Response</h2>
      
      {/* Flex container for details and button */}
      <div className="details-button-container">
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

        {/* Button for navigation */}
        <button className="navigate-button" onClick={navigateToModelInput}>
          Generate Credit Score
        </button>
      </div>
    </div>
  </div>
  );
};

export default DisplayJSON;