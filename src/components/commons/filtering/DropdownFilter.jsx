"use client";

import { useState } from "react";

const DropdownFilter = ({
  options,
  selected,
  onChange,
  placeholder = "Select...",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false); 
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputFocus = () => setIsOpen(true);
  const handleInputBlur = () => {
    setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
      />
      {isOpen && (
        <ul className="absolute w-full bg-white border rounded-md mt-1 max-h-40 overflow-auto shadow-md z-10">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className={`px-3 py-2 cursor-pointer hover:bg-indigo-100 ${
                option === selected ? "bg-indigo-200" : ""
              }`}
              onClick={() => {
                onChange(option);
                setSearchTerm(""); 
                setIsOpen(false); 
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownFilter;
