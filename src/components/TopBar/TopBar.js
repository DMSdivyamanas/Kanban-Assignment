import React, { useState } from "react";
import "./TopBar.css";
import Assets from "../../assets/assests";

const TopBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="top-bar">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <img src={Assets.Display} alt="Filter" className="icon" />
        <span>Display</span>
        <img src={Assets.Down} alt="Down Arrow" className="icon" />
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select>
              <option>Status</option>
              <option>Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <span>Ordering</span>
            <select>
              <option>Priority</option>
              <option>Status</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
