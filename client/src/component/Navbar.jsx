import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { About, Services } from "./Dropdown";

const links = [
  { to: "/", label: "Home" },
  { to: "/join-mission", label: "Join Mission" },
];

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  return (
    <>
      <div
        className={`bg-transparent ${"md:bg-transparent text-secondary"} p-2 fixed top-0 w-full z-50 `}
      >
        <div className="max-w-[1240px] flex items-center justify-between py-[2px] md:py-[15px] mx-auto">
          <div className="flex items-center">
            <div className="w-14 h-[10vh] rounded-full overflow-hidden md:ml-5">
              <img
                src="https://kamdhenuseva.com/wp-content/uploads/2021/05/Untitled-design-4.png"
                className="w-full h-full object-cover"
                alt="Logo"
              />
            </div>
          </div>
          <ul
            className={`hidden md:flex ${"text-secondary"} gap-10 ml-auto items-center mr-10`}
          >
            {links.map((link, index) => (
              <li key={index} className="group relative">
                <Link to={link.to} className="text-base md:text-xl font-bold">
                  {link.label}
                </Link>
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-500 underline-offset-8 transform -translate-x-1/2 group-hover:w-full"></span>
              </li>
            ))}
            <li
              className="group relative"
              onClick={() => setServiceDropdown(!serviceDropdown)}
            >
              <div
                to={"/"}
                className="text-base md:text-xl font-bold cursor-pointer"
              >
                Services
              </div>
              {/* Service Dropdown */}
              {serviceDropdown && <Services />}
              {/* Service Dropdown */}
              <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-500 underline-offset-8 transform -translate-x-1/2 group-hover:w-full"></span>
            </li>
            {/* Dropdown */}
            <li
              className="group relative"
              onClick={() => setAboutDropdown(!aboutDropdown)}
            >
              <div className="text-base md:text-xl font-bold cursor-pointer">
                About
              </div>
              <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-500 underline-offset-8 transform -translate-x-1/2 group-hover:w-full"></span>
              {/* About DropDown */}
              {aboutDropdown && <About />}
              {/* About DropDown */}
            </li>
            <li />
            <Link to="/donate">
              <button className="bg-[#6d9051] text-white px-8 py-1 rounded-3xl">
                Donate
              </button>
            </Link>
            <li />
          </ul>
          <div className="md:hidden mr-6">
            {toggle ? (
              <IoMdClose
                onClick={() => setToggle(!toggle)}
                className="text-white text-2xl"
              />
            ) : (
              <IoIosMenu
                onClick={() => setToggle(!toggle)}
                className="text-white text-2xl"
              />
            )}
          </div>
          {/* Responsive menu */}
          <ul
            className={`duration-300 md:hidden w-3/4 h-screen text-secondary fixed bg-white top-[0px] ${
              toggle ? "left-[0]" : "left-[-100%]"
            }`}
          >
            {links.map((link, index) => (
              <li key={index} className="p-4">
                <Link to={link.to} onClick={() => setToggle(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="p-4 cursor-pointer relative">
              <div onClick={() => setAboutDropdown(!aboutDropdown)}>About</div>
              {
                aboutDropdown && <About/>
              }
            </li>
            <li className="p-4 cursor-pointer relative">
              <div onClick={() => setServiceDropdown(!serviceDropdown)}>Services</div>
              {
                serviceDropdown && <Services/>
              }
            </li>
          </ul>
        </div>
      </div>
      <hr className="hidden md:block" />
    </>
  );
}

export default Navbar;
