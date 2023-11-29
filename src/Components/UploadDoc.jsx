import React from "react";
import pic from "../Components/images/pic.png";
import pdf from "../Components/images/pdf.png";
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
      <h1 className="UploadText">Choose your Upload</h1>
      <div className="innerContainer">
        <div
          className={`PicUpload ${drag ? "drag-over" : ""}`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h4 className="picText1">Upload a series of images</h4>
          <h5 className="picText2">Drag and drop files here</h5>
          <img className="pic" src={pic} alt="picUpload" />
          <h6 className="picText3">PNG or JPG</h6>
          {!drag && (
            <div className="Dropzone">
              <input
                type="file"
                multiple
                onChange={(event) => setDrag(event.target.files)}
                hidden
                ref={inputRef}
              />
              <button
                className="btn-pic"
                onClick={() => inputRef.current.click()}
              >
                Add file
              </button>
            </div>
          )}
        </div>
        <div
          className={`PdfUpload ${drag ? "drag-over" : ""}`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h4 className="pdfText1">Drag and drop files here</h4>
          <h5 className="pdfText2">Loan Application</h5>
          <img className="pdf" src={pdf} alt="pdfUpload" />
          <h6 className="pdfText3">PDF</h6>
          <button className="btn-pdf" onClick={() => inputRef.current.click()}>
            Add file
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadDoc;
