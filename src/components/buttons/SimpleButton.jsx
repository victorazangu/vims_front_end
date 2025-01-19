"use client";
import Link from "next/link";
const SimpleButton = ({
  link = "#",
  title,
  onClick = () => console.log("Button clicked"),
  bg,
}) => {
  return (
    <Link
      href={link}
      onClick={onClick}
      className={`py-2 px-4 ms-2 text-sm font-medium ${bg ? bg : "bg-[#b99c6f]"} text-white rounded-md hover:bg-[#b99c6f] hover:text-white`}
    >
      {title}
    </Link>
  );
};

export default SimpleButton;
