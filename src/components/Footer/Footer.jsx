import React from "react";
import { FaLinkedin } from "react-icons/fa";

const FooterLinks = [
  {
    title: "About",
    // link: "",
  },
  {
    title: "Services",
    // link: "",
  },
];
const HelpLinks = [
  {
    title: "Terms & Conditions",
    // link: "",
  },
  {
    title: "Privacy Policy",
    // link: "",
  },
];
const ResourcesLinks = [
  {
    title: "Publications",
    // link: "",
  },
];
const Footer = () => {
  return (
    <section className="bg-white text-gray-500 font-worksans p-4">
      <div className="grid md:grid-cols-3 py-5">
        <div className="text-gray-500">
          <h1 className="text-xl sm:text-left text-left flex">
            Pacific Environmental Solutions
          </h1>
          <a
            className="p-1"
            href="https://www.linkedin.com/company/pacific-environmental-solutions/"
          >
            <FaLinkedin className="text-2xl hover:text-blue-300 duration-300" />
          </a>

          <br />
        </div>
        {/* Links */}
        <div className="grid grid-cols-3 cols-span-3 pb-4">
          <div>
            <h1 className="text-md sm:text-left text-justify mb-3">Company</h1>
            <ul className={`flex flex-col gap-1`}>
              {FooterLinks.map((link) => (
                <li
                  key={link.title}
                  className="cursor-pointer hover:translate-x-0.5 duration-300 hover:!text-blue-300 space-x-1 text-gray-400 text-sm"
                >
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-4">
            <h1 className="text-md sm:text-left text-justify mb-3">Help</h1>
            <ul className="flex flex-col gap-1">
              {HelpLinks.map((link) => (
                <li
                  key={link.title}
                  className="cursor-pointer hover:translate-x-0.5 duration-300 hover:!text-blue-300 space-x-1 text-gray-400 text-sm"
                >
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-4">
            <h1 className="text-md sm:text-left text-justify mb-3">
              Resources
            </h1>
            <ul className="flex flex-col gap-1">
              {ResourcesLinks.map((link) => (
                <li
                  key={link.title}
                  className="cursor-pointer hover:translate-x-0.5 duration-300 hover:!text-blue-300 space-x-1 text-gray-400 text-sm"
                >
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-xs flex">
          <p>
            &copy; 2018-{new Date().getFullYear()} Pacific Environmental
            Solutions Group. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
