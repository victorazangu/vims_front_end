import { useState } from "react";
import Link from "next/link";
import DefaultImage from "@/assets/images/default.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { LogoutButton, Popup } from "@/components";

const ProfileSection = () => {
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  const handleLogout = () => {
    console.log("Logging out...");
  };

  const toggleNotificationPopup = () => {
    setShowNotificationPopup(!showNotificationPopup);
  };

  const toggleProfilePopup = () => {
    setShowProfilePopup(!showProfilePopup);
  };

  return (
    <div className="flex space-x-6 ml-auto px-2">
      <Link href="#" onClick={toggleNotificationPopup}>
        <div className="relative">
          <FontAwesomeIcon
            icon={faBell}
            size="lg"
            className="text-gray-500 hover:text-gray-700 pt-2 m-2"
          />
          <span className="absolute top-0 right-0 text-xs font-bold text-white bg-red-600 rounded-full w-4 h-4 flex items-center justify-center">
            {/* TODO: i will add the number of notifications here */}
            10
          </span>
        </div>
      </Link>
      <Link href="#" onClick={toggleProfilePopup}>
        <Image
          src={DefaultImage}
          width={50}
          height={50}
          className="p-0 m-2 rounded-full"
          alt="Profile Picture"
        />
      </Link>
      <LogoutButton handleLogout={handleLogout} />
      {showNotificationPopup && (
        <Popup
          title="Notifications"
          content={
            <div>
              <p>You have 3 new notifications:</p>
              <ul>
                <li>New message received</li>
                <li>Assignment updated</li>
                <li>Your profile was updated</li>
              </ul>
            </div>
          }
          onClose={toggleNotificationPopup}
        />
      )}

      {/* Profile Popup */}
      {showProfilePopup && (
        <Popup
          title="Profile"
          content={
            <div>
              <p>Name: John Doe</p>
              <p>Email: john.doe@example.com</p>
              {/* Add other profile details */}
            </div>
          }
          onClose={toggleProfilePopup}
        />
      )}
    </div>
  );
};

export default ProfileSection;
