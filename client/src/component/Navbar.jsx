import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  IoIosMenu,
  IoMdClose,
  IoIosArrowUp,
  IoIosArrowDown,
} from "react-icons/io";
import { motion } from "framer-motion";
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
  { to: "/adopt-gaumata", label: "Adopt Gaumata" },
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
  open: {
    opacity: 1,
    maxHeight: "500px", 
    transition: {
      opacity: { duration: 0.3 },
      maxHeight: { duration: 0.3, ease: "easeOut" },
    },
  },
  closed: {
    opacity: 0,
    maxHeight: 0,
    transition: {
      opacity: { duration: 0.3 },
      maxHeight: { duration: 0.3, ease: "easeIn" },
    },
  },
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
    if (type === "service") {
      setMobileServiceDropdown(!mobileServiceDropdown);
      setMobileAboutDropdown(false);
    } else if (type === "about") {
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
  className={`bg-green-800 p-2 h-[12vh] md:h-[15vh] fixed top-0 w-full z-50 transition-transform duration-300 ${
    scrollUp ? "" : "-translate-y-full"
  }`}
>
         <div className="max-w-[1240px] flex items-center justify-between py-[2px] md:py-[15px] mx-auto md:h-[15vh]">
    {/* Logo */}
    <div className="flex items-center">
      <div className="w-12 h-12 md:w-14 md:h-14 sm:w-10 sm:h-10 lg:w-16 lg:h-16 rounded-full overflow-hidden">
        {/* Adjust logo size for responsiveness */}
        <img
          src="https://kamdhenuseva.com/wp-content/uploads/2021/05/Untitled-design-4.png"
          className="w-full h-full object-cover"
          alt="Logo"
        />
      </div>
      </div>


         
          {/* Desktop Links */}
          <div className="hidden md:flex text-white gap-10 items-center mx-auto">
      <motion.ul
        variants={listVariants}
        initial="closed"
        animate="open"
        className="flex gap-10 items-center"
      >
        {links.map((link, index) => (
          <motion.li key={index} variants={itemVariants} className="group relative">
            <Link to={link.to} className="text-lg md:text-xl font-bold">
              {link.label}
            </Link>
            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-500 transform -translate-x-1/2 group-hover:w-full"></span>
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
                  Services
                  {serviceDropdown ? (
                    <IoIosArrowUp className="m-1" />
                  ) : (
                    <IoIosArrowDown className="m-1" />
                  )}
                </div>
                {serviceDropdown && (
                  <motion.div
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    className="absolute top-10 left-0 w-40 bg-white shadow-sm shadow-gray-200 text-black py-2 rounded-se-3xl rounded-es-3xl overflow-hidden z-40"
                  >
                    {serviceLinks.map((link, index) => (
                      <motion.div
                        key={index}
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
                  About
                  {aboutDropdown ? (
                    <IoIosArrowUp className="m-1" />
                  ) : (
                    <IoIosArrowDown className="m-1" />
                  )}
                </div>
                {aboutDropdown && (
                  <motion.div
                       variants={itemVariants}
                    initial="closed"
                    animate="open"
                    className="absolute top-10 left-0 w-52 bg-white shadow-sm shadow-gray-200 text-black py-2 duration-300 rounded-se-3xl rounded-es-3xl overflow-hidden z-40"
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
                <a
                  href="https://bayava-shop.vercel.app"
                  className="flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop
                </a>
              </motion.li>

              {/* Profile */}
              <motion.li
                variants={itemVariants}
                className="text-xl cursor-pointer"
              >
                <Link to={"/my-account"} className="flex items-center gap-2">
                  <GoPerson size={25} /> My Account
                </Link>
              </motion.li>
            </motion.ul>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div
      className="text-white cursor-pointer text-3xl md:hidden"
      onClick={() => setToggle(!toggle)}
    >
      {toggle ? <IoMdClose /> : <IoIosMenu />}
    </div>
  </div>
</div>

      {/* Mobile Dropdown Menu */}
      {toggle && (
        <motion.div
          variants={navVariants}
          initial="closed"
          animate="open"
          className="fixed top-[10vh] left-0 w-full h-[90vh] bg-green-800 text-white z-40 overflow-auto"
        >
          <ul className="flex flex-col gap-6 py-10">
            {links.map((link, index) => (
              <li key={index} className="px-4">
                <Link
                  to={link.to}
                  className="text-xl font-bold"
                  onClick={handleMobileLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="px-4 text-xl font-semibold">
              <div
                className="flex flex-col items-start cursor-pointer"
                onClick={() => handleMobileDropdown("service")}
              >
                <div className="flex items-center text-xl">
                  Services
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
                    className="flex flex-col gap-2 text-start bg-white shadow-lg shadow-gray-800 p-4 text-black py-2 rounded-se-3xl rounded-es-3xl"
                  >
                    {serviceLinks.map((link, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="text-base"
                      >
                        <Link to={link.to} onClick={handleMobileLinkClick}>
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </li>

            <li className="px-4 text-xl font-semibold">
              <div
                className="flex flex-col items-start cursor-pointer"
                onClick={() => handleMobileDropdown("about")}
              >
                <div className="flex items-center text-xl">
                  About
                  {mobileAboutDropdown ? (
                    <IoIosArrowUp className="m-1" />
                  ) : (
                    <IoIosArrowDown className="m-1" />
                  )}
                </div>

                {mobileAboutDropdown && (
                  <motion.div
                    variants={listVariants}
                    initial="closed"
                    animate="open"
                    className="flex flex-col gap-2 text-start bg-white shadow-lg shadow-gray-800 p-4 text-black py-2 rounded-se-3xl rounded-es-3xl"
                  >
                    {aboutLinks.map((link, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="text-base"
                      >
                        <Link to={link.to} onClick={handleMobileLinkClick}>
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </li>

            {/* Cart */}
            <li className="px-4 text-xl">
              <a
                href="https://bayava-shop.vercel.app"
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop
              </a>
            </li>

            {/* Profile */}
            <li className="px-4 text-xl">
              <Link
                to={"/my-account"}
                className="flex items-center gap-2"
                onClick={handleMobileLinkClick}
              >
                <GoPerson size={25} /> My Account
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
