"use client";

import React, { useState } from "react";
import ProfileSection from "./ProfileSection";
import SearchNavBar from "../buttons/SearchNavBar";

const Navbar = () => {
  return (
    <nav className="text-gray-800 ">
      <div className="flex items-center justify-between">
        <SearchNavBar />
        <ProfileSection />
        <div className="md:hidden block space-x-6">
          <button className=" text-[#b79d6d]">
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
          <ProfileSection />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
