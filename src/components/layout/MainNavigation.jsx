import SearchBar from "../ui/SearchBar";

function MainNavigation() {
  return (
    <header class="flex justify-between  items-center bg-violet-700 h-32 w-screen">
      <div className="pl-8">
        <h1>Logo</h1>
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="pr-8">
        <div>
          <button
            type="button"
            class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">Open user menu</span>
            <img
              class="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default MainNavigation;
