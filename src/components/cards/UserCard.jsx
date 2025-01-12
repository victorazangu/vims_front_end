import React from "react";
import Image from "next/image";
import SimpleButton from "../buttons/SimpleButton";

const UserCard = ({ name, designation, image }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#b99c6f] dark:border-[EDC384]">
      <div className="flex flex-col items-center pb-10 pt-8">
        <Image
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={image}
          alt={name}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-white-500 dark:text-white-400">
          {designation}
        </span>
        <div className="flex mt-4 md:mt-6">
          <SimpleButton link="#" title="View Profile" />
          <SimpleButton link="#" title="Message" />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
