const Submit = ({ name, bg ,onClick}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`text-white hover:bg-[#8E7B5F] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${bg ? bg : "bg-[#b99c6f]"}`}
    >
      {name}
    </button>
  );
};

export default Submit;