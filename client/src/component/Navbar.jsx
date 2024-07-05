import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";

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
        className={`bg-light ${"md:bg-light text-secondary"} p-2 fixed top-0 w-full z-50 `}
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
              <div to={"/"} className="text-base md:text-xl font-bold cursor-pointer">
                Services
              </div>
              {/* Service Dropdown */}
              {serviceDropdown && (
                <div className="absolute top-10 left-0 min-w-52 bg-secondary text-light flex flex-col gap-0 py-2 duration-300 rounded-se-3xl rounded-es-3xl overflow-hidden">
                  <Link
                    to="/shop"
                    className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
                  >
                    Our Products
                  </Link>
                  <Link
                    to="/blog"
                    className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
                  >
                    Our Blog
                  </Link>
                  <Link
                    to="/donar-dashboard"
                    className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
                  >
                    Donar Dashboard
                  </Link>
                  <Link
                    to="/contact-us"
                    className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
                  >
                    Contact us
                  </Link>
                </div>
              )}
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
              {aboutDropdown && (
                <div className="absolute top-10 left-0 min-w-52 bg-secondary text-light flex flex-col gap-0 py-2 duration-300 rounded-se-3xl rounded-es-3xl overflow-hidden">
                  <Link
                    to="/about-project"
                    className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
                  >
                    About Project
                  </Link>
                  <Link
                    to="/about-gaumata"
                    className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
                  >
                    About Gaumata
                  </Link>
                  <Link
                    to="/cow-puja"
                    className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
                  >
                    Cow Puja
                  </Link>
                  <Link
                    to="/veda-cow"
                    className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
                  >
                    Veda About Cow
                  </Link>
                  <Link
                    to="/spiritual-importance"
                    className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
                  >
                    Spiritual Importance
                  </Link>
                  <Link
                    to="/testimonials"
                    className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
                  >
                    Testimonials
                  </Link>
                  <Link
                    to="/gallery"
                    className="px-6 py-2 text-sm hover:bg-accent1 duration-300"
                  >
                    Gallery
                  </Link>
                </div>
              )}
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
          </ul>
        </div>
      </div>
      <hr className="hidden md:block" />
    </>
  );
}

export default Navbar;
