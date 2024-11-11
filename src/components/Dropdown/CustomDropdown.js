import React, { useState } from "react";
import "./CustomDropdown.css";
import Assets from "../../assets/assests";

const CustomDropdown = ({ options, onChange, label, topOffset }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelected(option);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <span>{label}</span>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <img src={selected.icon} alt={selected.label} className="option-icon" />
        {selected.label}
        <img
          src={Assets.Down}
          alt="Dropdown Arrow"
          className={`dropdown-arrow ${isOpen ? "open" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="dropdown-list" style={{ top: topOffset }}>
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              <img
                src={option.icon}
                alt={option.label}
                className="option-icon"
              />
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
