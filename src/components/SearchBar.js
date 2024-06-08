import { Search } from "iconoir-react";
import { useState } from "react";

const SearchBar = ({ triggerSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleInput = (event) => {
    if (event.key === "Enter") {
      triggerSearch(searchText);
    } else {
      setSearchText(event.target.value);
    }
  };

  return (
    <div className="flex justify-between relative w-full">
      {searchText}
      <input
        className="rounded w-full"
        type="text"
        placeholder="Search"
        onKeyUp={handleInput}
      />
      <div
        className="absolute inset-y-0 right-0 flex items-center px-2"
        onClick={() => triggerSearch(searchText)}
        typeof="submit"
        tabIndex={0}
      >
        <Search />
      </div>
    </div>
  );
};

export default SearchBar;
