function SearchBar() {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        className="h-[50px] w-full max-w-[300px] bg-white pl-2 pr-10 text-base font-semibold outline-0 rounded-full text-black border border-gray-300"
        placeholder="Search"
        id=""
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        className="w-7 h-7 absolute top-0 right-0 mt-3 mr-3 p-[3px] bg-purple-700 rounded-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
}

export default SearchBar;

