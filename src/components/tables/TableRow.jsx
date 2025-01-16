"use client";
import TableCell from "./TableCell";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const TableRow = ({ columns, rowData, actions }) => {
  const router = useRouter();
  const handleCardClick = (empId) => {
    router.push(`/students/${empId}`);
  };
  return (
    <tr className="bg-white border-b  dark:border-gray-700">
      {columns.map((column, idx) => (
        <TableCell key={idx} className={column.className}>
          {rowData[column.accessor]}
        </TableCell>
      ))}
      {actions && (
        <TableCell className="text-right flex space-x-2">
          {actions.map((action, idx) => (
            <button
              key={idx}
              onClick={() => handleCardClick(rowData.id)}
              className="font-medium hover:underline text-center text-[#b99c6f]"
            >
              <FontAwesomeIcon
                icon={action.icon}
                size="sm"
                width={20}
                height={20}
              />
            </button>
          ))}
        </TableCell>
      )}
    </tr>
  );
};

export default TableRow;
