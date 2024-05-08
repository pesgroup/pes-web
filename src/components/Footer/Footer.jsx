import React from "react";
import { FaLinkedin } from "react-icons/fa";

const FooterLinks = [
  {
    title: "About",
    link: "",
  },
  {
    title: "Services",
    link: "",
  },
];
const HelpLinks = [
  {
    title: "Terms & Conditions",
    link: "",
  },
  {
    title: "Privacy Policy",
    link: "",
  },
];
const ResourcesLinks = [
  {
    title: "Publications",
    link: "",
  },
];
const Footer = () => {
  return (
    <div className="bg-white text-gray-500 font-worksans">
      <section className="container py-10">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          {/* Links */}
          <div className="grid grid-cols-3 col-span-2 md:pl-10 ">
            <div className="py-8 px-4 ">
              <h1 className="text-xl sm:text-left text-justify mb-3">
                Company
              </h1>
              <ul className={`flex flex-col gap-3`}>
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
            <div className="py-8 px-4 ">
              <h1 className="text-xl sm:text-left text-justify mb-3">Help</h1>
              <ul className="flex flex-col gap-3">
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
       
              <div className="py-8 px-4 ">
                <h1 className="text-xl sm:text-left text-justify mb-3">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
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
          <div className="py-4 p-4 text-gray-500">
            <h1 className="sm:text-3xl text-xl sm:text-left text-justify my-3 flex items-center gap-3">
              Pacific Environmental Solutions
            </h1>
            <a
              className="p-1"
              href="https://www.linkedin.com/company/pacific-environmental-solutions/"
            >
              <FaLinkedin className="text-2xl hover:text-blue-300 duration-300" />
            </a>
            <div className="text-sm flex">
              <p className="text-sm">
                &copy; 2018-{new Date().getFullYear()} Pacific Environmental
                Solutions Group. All rights reserved.
              </p>
            </div>
            <br />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
