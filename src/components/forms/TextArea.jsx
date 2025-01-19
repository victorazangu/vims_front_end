

const TextArea = ({ label, name, rows, cols, message, placeholder }) => {
  return (
    <div className="col-span-full">
      <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <textarea
          name={name}
          id={name}
          rows={rows}
          cols={cols}
          placeholder={placeholder}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        ></textarea>
      </div>
      <p className="mt-3 text-sm/6 text-gray-600">{message}</p>
    </div>
  );
};

export default TextArea;
