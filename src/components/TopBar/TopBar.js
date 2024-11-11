import React, { useState } from "react";
import "./TopBar.css";
import Assets from "../../assets/assests";

const TopBar = ({ setGrouping }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
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
            <select onChange={handleGroupingChange}>
              <option value="default">Default</option>
              <option value="priority">Priority</option>
              <option value="user">User</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
