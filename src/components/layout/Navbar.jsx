import React from "react";
import ProfileDropdown from "../ui/buttons/ProfileDropdown";
import LanguageButton from "../ui/buttons/LanguageButton";
import SearchBar from "../ui/inputs/Searchbar";

function Navbar() {
  return (
    <div className="w-full h-20 flex justify-between items-center px-8 py-8 text-black font-bold bg-white shadow">
      <h1 className="text-2xl font-bold text-purple-600">Firepit.</h1>
      <ul className="flex items-center">
        <li className="pr-[330px]">
          <SearchBar />
        </li>
        <li className="py-2 px-4 hover:bg-gray-100 rounded-full">
          Setup a Firepit
        </li>
        <li className="py-2 px-4 hover:bg-gray-100 rounded-full">
          <LanguageButton />
        </li>
        <li className="px-4">
          <ProfileDropdown />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
