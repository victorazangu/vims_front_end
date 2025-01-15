const MainModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (

      <div
        className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-gray-400 bg-opacity-50"
        onClick={onClose}
      >
        <div
          className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow bg-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-500">
            <h3 className="text-xl font-semibold">
              {title}
            </h3>
            <button
              type="button"
              className="text-gray-500 bg-transparent hover:bg-gray-800 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-cente"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7 1 13"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>

  );
};

export default MainModal;
