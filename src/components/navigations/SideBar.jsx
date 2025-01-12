import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import NavLink from "./NavLink";

const SideBar = () => {
  return (
    <div className="hidden md:block shadow-lg bg-white px-5 mr-2  h-full">
      <div className=" text-2xl font-semibold">
        <Link href="/">
          <Image
            src={Logo}
            width={200}
            height={150}
            className="p-3 m-1"
            alt="Logo"
          />
        </Link>
      </div>
      <div>
        <NavLink />
      </div>
    </div>
  );
};

export default SideBar;
