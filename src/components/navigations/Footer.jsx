
import Link from "next/link";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="text-center py-4">
      <div className="w-full mx-auto max-w-screen-xl p-2 flex justify-center items-center">
        <span className="text-sm text-[#b99c6f]">
          © {thisYear}
          <Link href="/" className="hover:underline px-1">
            Victor Azangu Shemi™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
