import React, { useState } from "react";

const ColumnSelector = ({ columns, handleCheckboxChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="p-relative">
      <button className="btn" onClick={toggleDropdown}>
        Select Columns
      </button>
      {dropdownOpen && (
        <div className="dropdown-menu">
          {columns.map((column, index) => (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={column.isVisible}
                  onChange={() => handleCheckboxChange(index)}
                />
                {column.name}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColumnSelector;
