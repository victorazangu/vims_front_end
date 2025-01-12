"use client";
import React, { useState } from "react";
import {
  Input,
  Select,
  TextArea,
  Submit,
  CheckBoxGroup,
  RadioButton,
  RadioButtonGroup,
} from "@/components";
import { radioOptions, checkboxes } from "@/data/constants";

const Login = () => {
  return (
    <div className="p-3 m-3">
      <Input
        label="Email"
        name="email"
        type="text"
        value=""
        placeholder="Enter Email"
      />
      <Input
        label="Password"
        name="password"
        type="password"
        value=""
        placeholder="Enter Password"
      />

      <Select
        label="Country"
        name="country"
        options={[
          { key: "Usa", value: "1" },
          { key: "Kenya", value: 2 },
          { key: "Uganda", value: 3 },
        ]}
      />
      <TextArea
        label="About"
        name="about"
        rows={3}
        cols={2}
        message="Write something"
        placeholder="Write about youself"
      />
      <Submit name={"Submit"} />
      <CheckBoxGroup checkboxes={checkboxes} />

      <RadioButton name="sports" checked={true} label="Sports" />

      <RadioButtonGroup
        options={radioOptions}
        name="group1"
        defaultChecked={radioOptions[0].id}
      />
    </div>
  );
};

export default Login;
