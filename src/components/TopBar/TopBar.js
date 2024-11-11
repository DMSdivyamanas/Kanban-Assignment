import React, { useState, useEffect, useRef } from "react";
import "./TopBar.css";
import Assets from "../../assets/assests";
import CustomDropdown from "../Dropdown/CustomDropdown";

const TopBar = ({ setGrouping, setSorting }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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

  const groupingOptions = [
    { value: "default", label: "Status", icon: Assets.ToDo },
    { value: "priority", label: "Priority", icon: Assets.UrgentPriorityGrey },
    { value: "user", label: "User", icon: Assets.UserImage },
  ];

  const sortingOptions = [
    { value: "priority", label: "Priority", icon: Assets.UrgentPriorityGrey },
    { value: "title", label: "Title", icon: Assets.Display },
  ];

  return (
    <div className="top-bar" ref={dropdownRef}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        <img src={Assets.Display} alt="Filter" className="icon" />
        <span>Display</span>
        <img src={Assets.Down} alt="Down Arrow" className="icon" />
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <CustomDropdown
            options={groupingOptions}
            onChange={setGrouping}
            label="Grouping"
            topOffset="50%"
          />
          <CustomDropdown
            options={sortingOptions}
            onChange={setSorting}
            label="Sorting"
            topOffset="85%"
          />
        </div>
      )}
    </div>
  );
};

export default TopBar;
