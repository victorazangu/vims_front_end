import TableRow from "./TableRow";
import TableHead from "./TableHead";

const Table = ({ caption, description, columns, data, actions }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right ">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right bg-[#b99c6f] text-black">
          <u> {caption}</u>
          {description && (
            <p className="mt-1 text-sm font-normal">{description}</p>
          )}
        </caption>
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            {columns.map((column, index) => (
              <TableHead key={column.header} header={column.header} />
            ))}
            <TableHead header="Action" />
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              columns={columns}
              rowData={row}
              actions={actions}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
