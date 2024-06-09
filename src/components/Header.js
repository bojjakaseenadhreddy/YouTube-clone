import Colors from "../utils/constants/Colors";
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
      <ul className="flex justify-between items-center p-4">
        <li className="flex justify-between ">
          <div className="p-2">
            <Menu />
          </div>
          <div className="flex items-center ">
            <Youtube color={Colors.RED} />
            <p className="text-xl pl-1">YouTube</p>
          </div>
        </li>

        <li className="flex w-1/2">
          <SearchBar />
        </li>

        <li className="flex justify-between ">
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
