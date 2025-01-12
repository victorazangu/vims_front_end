import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const NavSection = ({ title, items, icon }) => {
  const [isOpen, setIsOpen] = useState(title === "Layouts");

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full p-2 text-gray-500 rounded-md hover:bg-[#b99e70] hover:text-white"
      >
        <FontAwesomeIcon icon={icon} />
        <span className="ml-2 text-sm">{title}</span>
        <svg
          className={`w-4 h-4 ml-auto transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-2 space-y-2 px-7">
          {items.map((item) => (
            <Link
              key={item.link}
              href={`/${item.link.replace(/^\/+/, "")}`}
              className="block p-2 text-sm transition-colors duration-200 rounded-md hover:text-white hover:bg-[#b99e70]"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavSection;
