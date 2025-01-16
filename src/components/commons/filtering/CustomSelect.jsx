"use client";
import { useState } from "react";

const CustomSelect = ({ options, selected, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-64">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 border rounded-md bg-white text-left focus:outline-none focus:ring focus:ring-indigo-500"
      >
        {selected || "Select an option"}
        <span className="absolute right-3 top-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <ul className="absolute w-full bg-white border rounded-md mt-1 shadow-md max-h-40 overflow-auto z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className={`px-3 py-2 cursor-pointer hover:bg-indigo-100 ${
                selected === option
                  ? "font-semibold text-indigo-600 bg-indigo-50"
                  : ""
              }`}
              onClick={() => {
                onChange(option);
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

export default CustomSelect;
