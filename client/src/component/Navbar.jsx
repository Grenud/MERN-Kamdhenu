import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";
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
  { to: "/about-gaumata", label: "About Gaumata" },
  { to: "/cow-puja", label: "Cow Puja" },
  { to: "/veda-cow", label: "Veda About Cow" },
  { to: "/spiritual-importance", label: "Spiritual Importance" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/gallery", label: "Gallery" },
];

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

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

  const staggerVariants = {
    open: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -100 },
  };

  return (
    <>
      <div
        className={`bg-green-800 p-2 h-[15vh] fixed top-0 w-full z-50 transition-transform duration-300 ${
          scrollUp ? "" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1240px] flex items-center justify-between py-[2px] md:py-[15px] mx-auto h-[15vh]">
          <div className="flex items-center">
            <div className="w-14 h-[9vh] rounded-full overflow-hidden md:ml-5">
              <img
                src="https://kamdhenuseva.com/wp-content/uploads/2021/05/Untitled-design-4.png"
                className="w-full h-full object-cover"
                alt="Logo"
              />
            </div>
          </div>
          <ul
            className={`hidden md:flex text-white gap-10 ml-auto items-center mr-10`}
          >
            {links.map((link, index) => (
              <li key={index} className="group relative">
                <Link to={link.to} className="text-base font-bold">
                  {link.label}
                </Link>
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-500 underline-offset-8 transform -translate-x-1/2 group-hover:w-full"></span>
              </li>
            ))}
            <li
              className="group relative"
              onClick={() => setServiceDropdown(!serviceDropdown)}
              ref={serviceRef}
            >
              <div className="text-base font-bold cursor-pointer">
                Services
              </div>
              {serviceDropdown && (
                <motion.div
                  variants={staggerVariants}
                  initial="closed"
                  animate="open"
                  className="absolute top-10 left-0 w-40 bg-white text-black py-2 duration-300 rounded-se-3xl rounded-es-3xl overflow-hidden"
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
            </li>

            <li
              className="group relative"
              onClick={() => setAboutDropdown(!aboutDropdown)}
              ref={aboutRef}
            >
              <div className="text-base font-bold cursor-pointer">
                About
              </div>
              {aboutDropdown && (
                <motion.div
                  variants={staggerVariants}
                  initial="closed"
                  animate="open"
                  className="absolute top-10 left-0 w-52 bg-white text-black py-2 duration-300 rounded-se-3xl rounded-es-3xl overflow-hidden"
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
            </li>
            <Link to={'/cart'} className="flex gap-2 items-center justify-center cursor-pointer">
              <div className=" font-semibold">&#8377; 0.00</div>
              <MdOutlineShoppingBag className="hover:text-light duration-300" size={25} />
            </Link>
            <Link to="/profile" className="font-semibold cursor-pointer ">
              <GoPerson className="hover:text-light duration-300" size={25} />
            </Link>
            <Link to="/donate">
              <button className="bg-[rgb(109,144,81)] text-white px-8 py-1 rounded-3xl">
                Donate
              </button>
            </Link>
          </ul>
          <div className="md:hidden mr-6">
            {toggle ? (
              <IoMdClose
                onClick={() => setToggle(!toggle)}
                className="text-white text-2xl"
                size={40}
              />
            ) : (
              <IoIosMenu
                onClick={() => setToggle(!toggle)}
                className="text-white text-2xl"
                size={40}
              />
            )}
          </div>
          <motion.ul
            initial="closed"
            animate={toggle ? "open" : "closed"}
            variants={staggerVariants}
            className={`duration-300 md:hidden w-3/4 h-screen text-black fixed bg-white top-0 ${
              toggle ? "left-[0]" : "left-[-100%]"
            }`}
          >
            {links.map((link, index) => (
              <motion.li key={index} variants={itemVariants} className="p-4">
                <Link to={link.to} onClick={() => setToggle(false)}>
                  {link.label}
                </Link>
              </motion.li>
            ))}
            <motion.li variants={itemVariants} className="p-4">
              <div
                className="cursor-pointer"
                onClick={() => setServiceDropdown(!serviceDropdown)}
              >
                Services
              </div>
              {serviceDropdown && (
                <motion.ul
                  variants={staggerVariants}
                  initial="closed"
                  animate="open"
                  className="pl-3 bg-green-800 transition-all text-white duration-300 rounded-se-3xl rounded-es-3xl overflow-hidden"
                >
                  {serviceLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="py-2"
                    >
                      <Link to={link.to} onClick={() => setToggle(false)}>
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.li>
            <motion.li variants={itemVariants} className="p-4">
              <div
                className="cursor-pointer"
                onClick={() => setAboutDropdown(!aboutDropdown)}
              >
                About
              </div>
              {aboutDropdown && (
                <motion.ul
                  variants={staggerVariants}
                  initial="closed"
                  animate="open"
                  className="pl-4 bg-green-800 transition-all text-white duration-300 rounded-se-3xl rounded-es-3xl overflow-hidden"
                >
                  {aboutLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="py-2"
                    >
                      <Link to={link.to} onClick={() => setToggle(false)}>
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.li>
          </motion.ul>
        </div>
      </div>
      <hr className="hidden md:block" />
    </>
  );
}

export default Navbar;
