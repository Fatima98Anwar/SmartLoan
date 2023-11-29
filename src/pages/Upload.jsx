import React from "react";
import "../Css/SearchBar.css";
import "../Css/UploadDoc.css";
import UploadDoc from "../Components/UploadDoc";

export const Upload = () => {
  return (
    <div className="UploadContainer">
      <div className="search">
        <UploadDoc />
      </div>
    </div>
  );
};

export default Upload;
