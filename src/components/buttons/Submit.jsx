import React from "react";

const Submit = ({ name }) => {
  return (
    <button
      type="submit"
      class="text-white bg-[#b99c6f] hover:bg-[#8E7B5F] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      {name}
    </button>
  );
};

export default Submit;
