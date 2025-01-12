import TableCell from "./TableCell";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableRow = ({ columns, rowData, actions }) => {
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
            <Link
              key={idx}
              href={action.link}
              className="font-medium hover:underline text-center text-[#b99c6f]"
            >
              <FontAwesomeIcon
                icon={action.icon}
                size="sm"
                width={20}
                height={20}
              />
            </Link>
          ))}
        </TableCell>
      )}
    </tr>
  );
};

export default TableRow;
