"use client";

import React, { useState } from "react";
import ProfileSection from "./ProfileSection";
import SearchNavBar from "../buttons/SearchNavBar";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-gray-800">
      <div className="flex items-center justify-between">
        <div className="md:hidden block space-x-6">
          <button
            className="text-[#b79d6d]"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-6 px-2">
          <SearchNavBar />
        </div>
        <ProfileSection />
      </div>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      >
        <div
          className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transition-transform duration-300 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }"
        >
          <NavLink />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
