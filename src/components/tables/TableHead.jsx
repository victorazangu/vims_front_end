import React from "react";

const TableHead = ({ header }) => {
  return (
    <th scope="col" className="px-6 py-3">
      {header}
    </th>
  );
};

export default TableHead;
