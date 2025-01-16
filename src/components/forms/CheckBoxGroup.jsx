"use client";
import React, { useState } from "react";
import CheckBox from "./CheckBox";

const CheckBoxGroup = ({ checkboxes }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const handleCheckboxChange = (value) => {
    setSelectedValue(selectedValue === value ? null : value);
  };

  return (
    <div className="mt-6 space-y-6">
      {checkboxes.map((checkbox,index) => (
        <CheckBox
          key={index}
          label={checkbox.label}
          description={checkbox.description}
          value={checkbox.value}
          name="options"
          checked={selectedValue === checkbox.value}
          onChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
};

export default CheckBoxGroup;
