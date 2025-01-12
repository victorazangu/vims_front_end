"use client";

// import Link from "next/link";

// const NavLink = ({ href, name }) => {
//   return (
//     <div>
//       <Link href={href}>{/* <a>{children}</a> */}</Link>
//     </div>
//   );
// };

// export default NavLink;

import React, { useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import NavSection from "./NavSection";
import { navigation } from "../../data/constants";

const NavLink = () => {
  return (
    <div>
      <aside
        className=""
      >
        <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
          {Object.entries(navigation).map(([key, section]) => (
            <NavSection
              key={key}
              title={key}
              items={section.items}
              icon={section.icon}
            />
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default NavLink;
