const SearchNavBar = () => {
  return (
    <div className=" space-x-6 ml-auto px-2 items-center">
      <input
        type="text"
        placeholder="Search..."
        className="py-2 px-4 rounded-md focus:outline-none"
      />
    </div>
  );
};

export default SearchNavBar;
