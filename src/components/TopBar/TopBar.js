import React, { useState, useEffect, useRef } from "react";
import "./TopBar.css";
import Assets from "../../assets/assests";

const TopBar = ({ setGrouping, setSorting }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
  };

  const handleSortingChange = (e) => {
    setSorting(e.target.value);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="top-bar" ref={dropdownRef}>
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
          <div className="dropdown-item">
            <span>Sorting</span>
            <select onChange={handleSortingChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
