const DateRangePicker = ({
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="date"
        value={fromDate}
        onChange={(e) => onFromDateChange(e.target.value)}
        className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
        placeholder="From"
      />
      <span>To</span>
      <input
        type="date"
        value={toDate}
        onChange={(e) => onToDateChange(e.target.value)}
        className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
        placeholder="To"
      />
    </div>
  );
};

export default DateRangePicker;
