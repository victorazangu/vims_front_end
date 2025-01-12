import React from "react";
import Link from "next/link";
import DefaultImage from "@/assets/images/default.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const ProfileSection = () => {
  return (
    <div className="hidden md:flex space-x-6 ml-auto px-2">
      <Link href="/">
        <FontAwesomeIcon
          icon={faBell}
          size="lg"
          className="text-gray-500 hover:text-gray-700 pt-2 m-2"
        />
      </Link>
      <Link href="/">
        <Image
          src={DefaultImage}
          width={50}
          height={50}
          className="p-0 m-2 rounded-full"
          alt="Logo"
        />
      </Link>
    </div>
  );
};

export default ProfileSection;
