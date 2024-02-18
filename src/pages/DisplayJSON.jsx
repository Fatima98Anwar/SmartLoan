import React, { useState, useEffect, useRef } from 'react';
import '../Css/DisplayJSON.css';
import { useLocation } from 'react-router-dom';

// Initial data
const initialLoanData = {'x': '123'};
const DisplayJSON = () => {
  const [loanData, setLoanData] = useState(initialLoanData);
  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  const location = useLocation();
  const dataFetchedRef = useRef(false);

  const file = location.state?.file;




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