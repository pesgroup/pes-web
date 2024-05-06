import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

export const MenuLinks = [
  {
    id: 1,
    name: "Services",
    link: "/services",
  },
  {
    id: 2,
    name: "Projects",
    link: "/projects",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="w-full duration-300 font-worksans">
      <div className="container">
        <div className="flex flex-col justify-between items-end">
          {/* Logo section */}
          {/* <a target="_blank" href="/home" className="flex items-center gap-3">
            <img src="" alt="" className="w-10" />
            <span className="text-2xl sm:text-3xl font-semibold"></span>
          </a> */}
          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="text-lg hover:text-gray-500 py-2 hover:border-b-2 hover:border-blue-300 transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile view Drawer  */}
          <div className="flex items-center gap-4 md:hidden ">
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
