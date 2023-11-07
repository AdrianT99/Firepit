import { useSelector } from "react-redux";
import ProfileDropdown from "../ui/buttons/ProfileDropdown";
import LanguageButton from "../ui/buttons/LanguageButton";
import SearchBar from "../ui/inputs/Searchbar";
import SignInDropdown from "../ui/buttons/SignInDropdown";
import { Link } from "react-router-dom";

function Navbar() {
  const isLogged = useSelector((state) => state.user.isLogged);

  return (
    <div className="w-full h-20 flex justify-between items-center px-8 py-8 text-black font-bold bg-white shadow">
      <Link to="/">
        <h1 className="text-2xl font-bold text-purple-600 pl-6">Firepit.</h1>
      </Link>
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
          {isLogged ? <ProfileDropdown /> : <SignInDropdown />}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
