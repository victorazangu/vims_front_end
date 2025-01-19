import Link from "next/link";

const Input = ({ label, name, type, value, placeholder, required }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor="password"
          className="block text-sm/6 font-medium text-gray-900"
        >
          {label}
        </label>
        {name === "password" ? (
          <div className="text-sm">
            <Link href="#" className="font-semibold">
              Forgot password?
            </Link>
          </div>
        ) : null}
      </div>
      <div className="mt-2">
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          id={name}
          autoComplete={name}
          required={required}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>
  );
};

export default Input;
