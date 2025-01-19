
const Popup = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-80 max-w-md">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <div className="mt-2">{content}</div>
      </div>
    </div>
  );
};

export default Popup;
