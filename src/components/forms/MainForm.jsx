import React from "react";

const MainForm = ({ children, action, className, ...props }) => {
  return (
    <form action={action} className={`space-y-4 ${className || ""}`} {...props}>
      {children}
    </form>
  );
};

export default MainForm;
