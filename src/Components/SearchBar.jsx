import React from "react";
import { IoSearch } from "react-icons/io5";

export const SearchBar = () => {
  return (
    <div className="BarContainer">
      <div className="searchbar">
        <div className="search-icon">
          <IoSearch />
        </div>
        <input className="input " type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchBar;
