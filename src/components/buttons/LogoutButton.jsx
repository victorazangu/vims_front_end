import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const LogoutButton = ({ handleLogout }) => {
  return (
    <button
      onClick={handleLogout}
      className="p-2 text-gray-600 hover:text-gray-800"
    >
      <FontAwesomeIcon icon={faSignOutAlt} className="h-6 w-6" />
    </button>
  );
};

export default LogoutButton;
