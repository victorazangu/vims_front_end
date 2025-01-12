import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "@/assets/images/logo.png";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
      {/* Logo Section */}
      <div className="mb-6">
        <Image
          src={Logo}
          alt="Company Logo"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      {/* Error Icon */}
      <div className="text-red-500">
        <FontAwesomeIcon icon={faExclamationTriangle} size="6x" />
      </div>

      {/* Error Text */}
      <h1 className="text-5xl font-bold text-gray-800 mt-6">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mt-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 mt-4">
        Oops! The page you are looking for does not exist or has been moved.
      </p>

      {/* Return to Home Button with Arrow Icon */}
      <Link
        href="/"
        className="mt-6 w-fit max-w-md px-3 py-2 bg-[#b99c6e] text-white text-lg font-medium rounded-md shadow-md hover:bg-[#b99c6e] focus:ring-2 focus:ring-[#b99c6e] focus:outline-none transition duration-300 flex items-center justify-center gap-1"
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon icon={faArrowLeft} width={70} height={70} />
          <span style={{ fontSize: "32px", marginLeft: "10px" }}>
            Return to Home
          </span>
        </div>
      </Link>
    </div>
  );
}
