import Link from "next/link";
import { Button } from "./button";
import { RiMenu3Line } from "react-icons/ri";
import Image from "next/image";
import logo from "../../../public/img/trip4all_white.svg";

interface HeaderProps {
  toggleSideMenu: () => void;
}

const DashboardNav = ({ toggleSideMenu }: HeaderProps) => {
  return (
    <header className="z-30 py-4 h-20 bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        <Link href="/">
          <Image
            width={150}
            height={50}
            className="w-auto h-7"
            src={logo}
            alt=""
          />
        </Link>
        {/* Mobile hamburger */}
        <Button
          variant={"ghost"}
          className="p-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple w-10 h-10 active:bg-transparent"
          onClick={toggleSideMenu}
          aria-label="Menu">
          <RiMenu3Line className="w-10 h-10" />
        </Button>
      </div>
    </header>
  );
};

export default DashboardNav;
