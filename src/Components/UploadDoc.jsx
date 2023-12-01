import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import pdf from "../Components/images/pdf.svg";
import DisplayJSON from "../pages/DisplayJSON";

export const UploadDoc = () => {
  const [file, setFile] = useState(null); // State for the file
  const [drag, setDrag] = useState(null); // State for drag-and-drop
  const navigate = useNavigate(); // Hook for navigation, called inside the component
  const inputRef = useRef(); // Hook for the input reference, called inside the component

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log("File dropped");
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const uploadedFile = files[0];
      setFile(uploadedFile);
      // You might want to navigate after setting the file
    }
    setDrag(files);
  };

  const handleFiles = (event) => {
    const uploadedFile = event.target.files[0]; // Assuming single file upload
    if (uploadedFile) {
      setFile(uploadedFile);
      navigate('/displayjson', { state: { filePath: uploadedFile.path } }); // Navigate to DisplayJSON component
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  if (drag && drag.length > 0) {
    // Navigate after the file is set in the state
    navigate('/displayjson', { state: { filePath: drag[0].path } });
    return (
      <div className="Uploads">
        <ul>
          {Array.from(drag).map((file, idx) => (
            <li key={file.name}>{file.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="Upload-Container">
      <h1 className="UploadText">Upload PDF</h1>
      <div className="innerContainer">
        <div
          className={`PdfUpload ${drag ? "drag-over" : ""}`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleClick}  // This will trigger the file input when the div is clicked
        >
          <img className="pdf" src={pdf} alt="pdfUpload" />
          <input
            type="file"
            ref={inputRef}
            onChange={handleFiles}
            style={{ display: 'none' }}
            multiple  // Remove this if you want to limit to single file uploads
          />
        </div>
      </div>
    </div>
  );
};

export default UploadDoc;
