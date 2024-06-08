import SearchBar from "./SearchBar";
import {
  BellNotification,
  MediaVideoPlus,
  Menu,
  ProfileCircle,
  Youtube,
} from "iconoir-react";

const Header = () => {
  return (
    <header>
      <ul className="flex justify-between p-4">
        <li className="flex justify-between ">
          <div className="p-2">
            <Menu />
          </div>
          <div className="p-2">
            <Youtube />
          </div>
        </li>

        <li className="flex items-center w-1/2">
          <SearchBar />
        </li>

        <li className="flex justify-between">
          <div className="p-2">
            <MediaVideoPlus />
          </div>
          <div className="p-2">
            <BellNotification />
          </div>
          <div className="p-2">
            <ProfileCircle />
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
