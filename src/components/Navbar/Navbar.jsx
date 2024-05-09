import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "/src/assets/logo.PNG";

const Navbar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null);

  const aboutWindowRef = useRef(null);
  const servicesWindowRef = useRef(null);

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
    if (isServicesOpen) {
      setIsServicesOpen(false);
    }
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    if (isAboutOpen) {
      setIsAboutOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (aboutWindowRef.current &&
          !aboutWindowRef.current.contains(event.target)) ||
        (servicesWindowRef.current &&
          !servicesWindowRef.current.contains(event.target))
      ) {
        setIsAboutOpen(false);
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const NavItems = [
    {
      id: 0,
      title: "About",
    },
    {
      id: 1,
      title: "Services",
    },
    {
      id: 2,
      title: "Projects",
    },
    {
      id: 3,
      title: "Resources",
    },
  ];

  return (
    <nav className="absolute z-10 h-12 font-worksans bg-gray-800 bg-opacity-60 w-full p-2">
      {/* HOME ICON */}
      <div className="flex align-middle space-x-4">
        <Link to="/">
          <img className="h-7 opacity-80" src={Logo}></img>
        </Link>

        {/* NAV MENU */}

        <div className="text-gray-100 text-lg font-normal space-x-4">
          {/* ABOUT BUTTON */}
          <button
            onMouseEnter={() => setHoveredOption("about")}
            onMouseLeave={() => setHoveredOption(null)}
            onClick={toggleAbout}
            className={`${
              isAboutOpen || hoveredOption === "about"
                ? "text-blue-400 border-b-2"
                : "hover:text-blue-400 hover:border-b-2"
            }`}
          >
            About
          </button>

          {/* SERVICES BUTTON */}
          {/* <button
              onMouseEnter={() => setHoveredOption("services")}
              onMouseLeave={() => setHoveredOption(null)}
              onClick={toggleServices}
              className={`${
                isServicesOpen || hoveredOption === "services"
                  ? "text-blue-400 border-b-4"
                  : "hover:text-blue-400 hover:border-b-4"
              }`}
            >
              Services
            </button> */}

          {/* PROJECTS BUTTON */}
          <button className="hover:text-blue-400 hover:border-b-2">
            <NavLink
              to="/projects"
              onClick={() => {
                setIsAboutOpen(false);
                setIsServicesOpen(false);
              }}
            >
              Projects
            </NavLink>
          </button>

          {/* RESOURCES BUTTON */}
          <button className="hover:text-blue-400 hover:border-b-2">
            <NavLink
              to="/resources"
              onClick={() => {
                setIsAboutOpen(false);
                setIsServicesOpen(false);
              }}
            >
              Resources
            </NavLink>
          </button>
        </div>
      </div>

      {/* ABOUT WINDOW */}
      {isAboutOpen && (
        <div
          ref={aboutWindowRef}
          className="absolute top-full w-full left-0 bg-gray-800 bg-opacity-60 text-gray-200 shadow-lg flex"
          onClick={toggleAbout}
        >
          <div className="p-8">
            {[
              {
                label: "Who We Are",
                path: "/about/who-we-are",
                content: "Content for Who We Are",
              },
              {
                label: "Our Management",
                path: "/about/our-management",
                content: "Content for Our Management",
              },
              // {
              //   label: "Our Values",
              //   path: "/about/our-values",
              //   content: "Content for Our Values",
              // },
              {
                label: "Our History",
                path: "/about/our-history",
                content: "Content for Our History",
              },

              {
                label: "Contact Us",
                path: "/about/contact-us",
                content: "Content for Contact Us",
              },
            ].map(({ label, path, content }) => (
              <button
                key={path}
                onMouseEnter={() => setHoveredOption(label)}
                onMouseLeave={() => setHoveredOption(null)}
                className="hover:bg-blue-400 p-1 flex items-center w-[192px] tracking-tighter text-gray-300"
              >
                <NavLink
                  to={path}
                  className="flex items-center space-x-2"
                  onClick={() => setIsAboutOpen(false)}
                >
                  <span>{label}</span>
                </NavLink>
              </button>
            ))}
          </div>
          <div className="flex flex-col p-8 w-3/4">
            {hoveredOption && (
              <div>
                {/* Content for hovered option */}
                {
                  [
                    { label: "Who We Are", content: "Content for Who We Are" },
                    {
                      label: "Our Management",
                      content: "Content for Our Management",
                    },
                    { label: "Our Values", content: "Content for Our Values" },
                    {
                      label: "Our History",
                      content: "Content for Our History",
                    },
                    {
                      label: "Our Branches",
                      content: "Content for Our Branches",
                    },
                    { label: "Contact Us", content: "Content for Contact Us" },
                  ].find((item) => item.label === hoveredOption)?.content
                }
              </div>
            )}
          </div>
        </div>
      )}

      {/* SERVICES WINDOW */}
      {isServicesOpen && (
        <div
          ref={servicesWindowRef}
          className="absolute top-full w-full left-0 bg-gray-800 bg-opacity-75 text-gray-200 shadow-lg flex"
          onClick={toggleServices}
        >
          <div className="p-8 w-1/4">
            {[
              {
                label: "Solar PV Systems",
                path: "/services/solar-pv-systems",
              },
              {
                label: "Waste-to-Energy",
                path: "/services/waste-to-energy",
              },
              {
                label: "Water Desalination",
                path: "/services/water-desalination",
              },
              { label: "Wind Energy", path: "/services/wind" },

              {
                label: "View All Services",
                path: "/services",
              },
            ].map(({ label, path }) => (
              <button
                key={path}
                onMouseEnter={() => setHoveredOption(label)}
                onMouseLeave={() => setHoveredOption(null)}
                className="text-gray-200 hover:bg-blue-400 p-1 flex items-center w-[192px]"
              >
                <NavLink
                  to={path}
                  className="flex items-center space-x-2"
                  onClick={() => setIsServicesOpen(false)}
                >
                  <span>{label}</span>
                </NavLink>
              </button>
            ))}
          </div>
          <div className="flex flex-col p-8 w-3/4">
            {hoveredOption && (
              <div>
                {/* Content for hovered option */}
                {
                  [
                    { label: "Solar PV Systems", content: "Content for Solar" },
                    {
                      label: "Waste-to-Energy",
                      content: "Content for Waste-to-Energy",
                    },
                    {
                      label: "Water Desalination",
                      content: "Content for Water Desalination",
                    },
                    {
                      label: "Wind Energy",
                      content: "Content for Wind Energy",
                    },
                    {
                      label: "View All Services",
                      content: "Content for View All Services",
                    },
                  ].find((item) => item.label === hoveredOption)?.content
                }
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
