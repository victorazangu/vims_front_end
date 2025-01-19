
const CheckBox = ({ label, description, checked, disabled, name, value, onChange }) => {
  return (
    <div className="flex gap-3">
      <div className="flex h-6 shrink-0 items-center">
        <div className="group grid size-4 grid-cols-1">
          <input
            id={name}
            aria-describedby={name}
            name={name}
            value={value}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={() => onChange(value)}
            className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
          />
          <svg
            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              className="opacity-0 group-has-[:checked]:opacity-100"
              d="M3 8L6 11L11 3.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="opacity-0 group-has-[:indeterminate]:opacity-100"
              d="M3 7H11"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="text-sm/6">
        <label htmlFor={name} className="font-medium text-gray-900">
          {label}
        </label>
        <p id={name} className="text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CheckBox;
