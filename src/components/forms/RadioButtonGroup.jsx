"use client";
import React, { useState } from "react";
import RadioButtonOption from "./RadioButtonOption";

const RadioButtonGroup = ({ options, name, defaultChecked }) => {
  const [selectedOption, setSelectedOption] = useState(defaultChecked);
  const handleRadioChange = (id) => {
    setSelectedOption(id);
  };

  return (
    <div className="mt-6 space-y-6">
      {options.map((option,index) => (
        <RadioButtonOption
          key={index}
          id={option.id}
          name={name}
          label={option.label}
          checked={selectedOption === option.id}
          onChange={handleRadioChange}
          disabled={option.disabled}
        />
      ))}
    </div>
  );
};

export default RadioButtonGroup;
