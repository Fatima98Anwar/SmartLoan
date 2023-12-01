import React from "react";
import pic from "../Components/images/pic.png";
import pdf from "../Components/images/pdf.svg";
import { useState, useRef } from "react";
export const UploadDoc = () => {
  const [drag, setDrag] = useState(null);
  const inputRef = useRef();
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    console.log("File dropped");
    setDrag(event.dataTransfer.files);
  };

  
  const handleFiles = (event) => {
    setDrag(event.target.files);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  if (drag)
    return (
      <div className="Uploads">
        <ul>
          {Array.from(drag).map((file, idx) => (
            <li key={file.name}>{file.name}</li>
          ))}
        </ul>
      </div>
    );

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
            {/* <h4 className="pdfText1">Drag and drop files here</h4> */}
            <img className="pdf" src={pdf} alt="pdfUpload" />
            {/* <h6 className="pdfText3">PDF</h6> */}
            <input
              type="file"
              ref={inputRef}
              onChange={handleFiles}
              style={{ display: 'none' }}  // Hide the file input
              multiple  // Remove this if you want to limit to single file uploads
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default UploadDoc;