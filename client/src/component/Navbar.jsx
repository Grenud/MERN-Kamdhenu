import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  IoIosMenu,
  IoMdClose,
  IoIosArrowUp,
  IoIosArrowDown,
} from "react-icons/io";
import { motion } from "framer-motion";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GoPerson } from "react-icons/go";

const links = [
  { to: "/", label: "Home" },
  { to: "/join-mission", label: "Join Mission" },
];

const serviceLinks = [
  { to: "/shop", label: "Our Products" },
  { to: "/blog", label: "Our Blog" },
  { to: "/donar-dashboard", label: "Donar Dashboard" },
  { to: "/contact-us", label: "Contact us" },
];

const aboutLinks = [
  { to: "/about-project", label: "About Project" },
  { to: "/adopt-gaumata", label: "About Gaumata" },
  { to: "/cow-puja", label: "Cow Puja" },
  { to: "/veda-cow", label: "Veda About Cow" },
  { to: "/spiritual-importance", label: "Spiritual Importance" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/gallery", label: "Gallery" },
];

const navVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  closed: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const listVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -10 },
};

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [mobileServiceDropdown, setMobileServiceDropdown] = useState(false);
  const [mobileAboutDropdown, setMobileAboutDropdown] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollUp, setScrollUp] = useState(true);

  const serviceRef = useRef(null);
  const aboutRef = useRef(null);

  const handleClickOutside = (event) => {
    if (serviceRef.current && !serviceRef.current.contains(event.target)) {
      setServiceDropdown(false);
    }
    if (aboutRef.current && !aboutRef.current.contains(event.target)) {
      setAboutDropdown(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollUp(window.scrollY < scrollY);
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [scrollY]);

  const handleMobileDropdown = (type) => {
    if (type === 'service') {
      setMobileServiceDropdown(!mobileServiceDropdown);
      setMobileAboutDropdown(false);
    } else if (type === 'about') {
      setMobileAboutDropdown(!mobileAboutDropdown);
      setMobileServiceDropdown(false);
    }
  };

  const handleMobileLinkClick = () => {
    setToggle(false);
    setMobileServiceDropdown(false);
    setMobileAboutDropdown(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={`bg-green-800 p-2 h-[15vh] fixed top-0 w-full z-50 transition-transform duration-300 ${
          scrollUp ? "" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1240px] flex items-center justify-between py-[2px] md:py-[15px] mx-auto h-[15vh]">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-14 h-[9vh] rounded-full overflow-hidden md:ml-5">
              <img
                src="https://kamdhenuseva.com/wp-content/uploads/2021/05/Untitled-design-4.png"
                className="w-full h-full object-cover"
                alt="Logo"
              />
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex text-white gap-10 ml-auto items-center mr-10">
            <motion.ul
              variants={listVariants}
              initial="closed"
              animate="open"
              className="flex gap-10 items-center"
            >
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <Link to={link.to} className="text-xl font-bold">
                    {link.label}
                  </Link>
                  <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-500 underline-offset-8 transform -translate-x-1/2 group-hover:w-full"></span>
                </motion.li>
              ))}

              {/* Services Dropdown */}
              <motion.li
                className="group relative"
                onClick={() => setServiceDropdown(!serviceDropdown)}
                ref={serviceRef}
                variants={itemVariants}
              >
                <div className="flex text-base md:text-xl font-bold cursor-pointer">
                  Services{" "}
                  {serviceDropdown ? (
                    <IoIosArrowUp className="m-1" />
                  ) : (
                    <IoIosArrowDown className="m-1" />
                  )}
                </div>
                {serviceDropdown && (
                  <motion.div
                    variants={listVariants}
                    initial="closed"
                    animate="open"
                    className="absolute top-10 left-0 w-40 bg-white shadow-md shadow-gray-400 text-black py-2 duration-300 rounded-se-3xl rounded-es-3xl overflow-hidden z-40"
                  >
                    {serviceLinks.map((link, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="px-6 py-2 text-sm hover:bg-[#6d9051] duration-300"
                      >
                        <Link to={link.to} onClick={() => setToggle(false)}>
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-500 underline-offset-8 transform -translate-x-1/2 group-hover:w-full"></span>
              </motion.li>

              {/* About Dropdown */}
              <motion.li
                className="group relative"
                onClick={() => setAboutDropdown(!aboutDropdown)}
                ref={aboutRef}
                variants={itemVariants}
              >
                <div className="flex text-base md:text-xl font-bold cursor-pointer">
                  About{" "}
                  {aboutDropdown ? (
                    <IoIosArrowUp className="m-1" />
                  ) : (
                    <IoIosArrowDown className="m-1" />
                  )}
                </div>
                {aboutDropdown && (
                  <motion.div
                    variants={listVariants}
                    initial="closed"
                    animate="open"
                    className="absolute top-10 left-0 w-52 bg-white shadow-md shadow-gray-400 text-black py-2 duration-300 rounded-se-3xl rounded-es-3xl overflow-hidden z-40"
                  >
                    {aboutLinks.map((link, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="px-6 py-2 text-sm hover:bg-[#6d9051] duration-300"
                      >
                        <Link to={link.to} onClick={() => setToggle(false)}>
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-500 underline-offset-8 transform -translate-x-1/2 group-hover:w-full"></span>
              </motion.li>

              {/* Cart */}
              <motion.li
                variants={itemVariants}
                className="text-xl cursor-pointer"
              >
                <Link to={"/cart"} className="flex items-center gap-2">
                  <MdOutlineShoppingBag size={25} /> &#8377; 0.00
                </Link>
              </motion.li>

              {/* Profile */}
              <motion.li
                variants={itemVariants}
                className="text-xl cursor-pointer"
              >
                <Link to="/profile">
                  <GoPerson size={25} />
                </Link>
              </motion.li>
              <Link to="/donate" onClick={handleMobileLinkClick}>
                <button className="bg-[rgb(109,144,81)] text-white px-8 py-1 rounded-3xl">
                  Donate
                </button>
              </Link>
            </motion.ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-auto">
            {toggle ? (
              <IoMdClose
                onClick={() => setToggle(!toggle)}
                className="w-10 h-10 bg-transparent text-white "
              />
            ) : (
              <IoIosMenu
                onClick={() => setToggle(!toggle)}
                className="w-10 h-10 bg-transparent text-white "
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {toggle && (
        <div className="md:hidden duration-300 fixed top-0 left-0 w-3/4 h-screen bg-white z-40">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-start p-4 mt-3 gap-8 pt-24 text-gray-800 text-lg"
          >
            {links.map((link, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-xl"
              >
                <Link
                  to={link.to}
                  onClick={handleMobileLinkClick}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <div className="flex flex-col items-start gap-4">
              {/* Mobile Services Dropdown */}
              <div
                className="flex flex-col items-start cursor-pointer"
                onClick={() => handleMobileDropdown('service')}
              >
                <div className="flex items-center text-xl">
                  Services{" "}
                  {mobileServiceDropdown ? (
                    <IoIosArrowUp className="ml-1" />
                  ) : (
                    <IoIosArrowDown className="ml-1" />
                  )}
                </div>
                {mobileServiceDropdown && (
                  <motion.div
                    variants={listVariants}
                    initial="closed"
                    animate="open"
                    className="flex flex-col gap-2 text-start bg-green-800 shadow-lg shadow-gray-800 p-4 text-white py-2 rounded-se-3xl rounded-es-3xl"
                  >
                    {serviceLinks.map((link, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="text-base"
                      >
                        <Link
                          to={link.to}
                          onClick={handleMobileLinkClick}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Mobile About Dropdown */}
              <div
                className="flex flex-col items-start mt-4 cursor-pointer"
                onClick={() => handleMobileDropdown('about')}
              >
                <div className="flex items-center text-xl">
                  About{" "}
                  {mobileAboutDropdown ? (
                    <IoIosArrowUp className="ml-1" />
                  ) : (
                    <IoIosArrowDown className="ml-1" />
                  )}
                </div>
                {mobileAboutDropdown && (
                  <motion.div
                    variants={listVariants}
                    initial="closed"
                    animate="open"
                    className="flex flex-col gap-2 text-start bg-green-800 shadow-lg shadow-gray-800 p-4 text-white py-2 rounded-se-3xl rounded-es-3xl"
                  >
                    {aboutLinks.map((link, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="text-base"
                      >
                        <Link
                          to={link.to}
                          onClick={handleMobileLinkClick}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Cart and Profile */}
              <Link
                to={"/cart"}
                onClick={handleMobileLinkClick}
                className="flex items-center gap-2 mt-4 text-xl"
              >
                <MdOutlineShoppingBag size={25} /> &#8377; 0.00
              </Link>
              <Link
                to="/profile"
                onClick={handleMobileLinkClick}
                className="text-xl mt-4"
              >
                <GoPerson size={25} />
              </Link>

              {/* Donate Button */}
              <Link to="/donate" onClick={handleMobileLinkClick}>
                <button className="bg-[rgb(109,144,81)] text-white px-8 py-1 mt-4 rounded-3xl">
                  Donate
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default Navbar;