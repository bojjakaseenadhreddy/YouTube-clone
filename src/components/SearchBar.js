import { Search } from "iconoir-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../utils/store/slices/SearchSlice";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const searchDispatch = useDispatch();

  const handleInput = (event) => {
    if (event.key === "Enter") {
      searchDispatch(search(searchText));
    } else {
      setSearchText(event.target.value);
    }
  };

  return (
    <div className="flex justify-between relative w-full">
      <input
        className="rounded w-full"
        type="text"
        placeholder="Search"
        onKeyUp={handleInput}
      />
      <div
        className="absolute inset-y-0 right-0 flex items-center px-2"
        onClick={() => searchDispatch(search(searchText))}
        typeof="submit"
        tabIndex={0}
      >
        <Search />
      </div>
    </div>
  );
};

export default SearchBar;
