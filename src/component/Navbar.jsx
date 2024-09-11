import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SmallYellowOutlineButton from "../component/SmallYellowOutlineButton";
import {
  IoIosMenu,
  IoMdClose,
  IoIosArrowUp,
  IoIosArrowDown,
} from "react-icons/io";
import { GoPerson } from "react-icons/go";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SetUser } from "../redux/AuthSlice";
import { useNavigate } from "react-router-dom";

const links = [{ to: "/join-mission", label: "Join Mission" }];

const serviceLinks = [
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

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [mobileServiceDropdown, setMobileServiceDropdown] = useState(false);
  const [mobileAboutDropdown, setMobileAboutDropdown] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollUp, setScrollUp] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.Auth)
  const navigate = useNavigate()
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

  const handleLogout = async () => {
    try {
      const {data} = await axios.post('/api/auth/logout')
      if(data.success){
        dispatch(SetUser({
          user:null
        }))
        toast.success(data.message)
        navigate("/")
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

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
      {/* Desktop and Tablet Navbar */}
      <div
        className={`bg-green-800 p-2 h-[10vh] md:h-[11vh] lg:h-[12vh] fixed top-0 w-full z-50 transition-transform duration-300 ${scrollUp ? "" : "-translate-y-full"
          }`}
      >
        <div className="max-w-[1240px] flex items-center justify-between py-[2px] md:py-[10px] mx-auto h-full">
          {/* Logo */}
          <div className="flex items-center h-full">
            <div className="w-9 h-9 md:w-12 md:h-12 rounded-full lg:ml-6 overflow-hidden flex items-center justify-center">
              <Link to="/">
                <img
                  src="https://kamdhenuseva.com/wp-content/uploads/2021/05/Untitled-design-4.png"
                  className="object-contain h-full w-full"
                  alt="Logo"
                />
              </Link>
            </div>
          </div>

          {/* Desktop and Tablet Links */}
          <div className="hidden md:flex text-white gap-4 items-center lg:mr-10">
            <ul className="flex gap-4 lg:gap-8 items-center">
              {links.map((link, index) => (
                <li key={index} className="group relative">
                  <Link to={link.to} className="text-lg  font-bold">
                    {link.label}
                  </Link>
                  <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-500 transform -translate-x-1/2 group-hover:w-full"></span>
                </li>
              ))}

              {/* Services Dropdown */}
              <li
                className="group relative"
                onClick={() => setServiceDropdown(!serviceDropdown)}
                ref={serviceRef}
              >
                <div className="flex items-center text-lg font-bold cursor-pointer">
                  <span>Services</span>
                  {serviceDropdown ? (
                    <IoIosArrowUp className="ml-2" />
                  ) : (
                    <IoIosArrowDown className="ml-2" />
                  )}
                </div>
                {serviceDropdown && (
                  <div className="absolute top-10 left-0 w-40 bg-white shadow-lg text-black py-2 rounded-se-3xl rounded-es-3xl overflow-hidden z-40">
                    {serviceLinks.map((link, index) => (
                      <div
                        key={index}
                        className="px-6 py-2 text-sm hover:bg-[#6d9051] duration-300"
                      >
                        <Link to={link.to} onClick={() => setToggle(false)}>
                          {link.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-500 underline-offset-8 transform -translate-x-1/2 group-hover:w-full"></span>
              </li>

              {/* About Dropdown */}
              <li
                className="group relative"
                onClick={() => setAboutDropdown(!aboutDropdown)}
                ref={aboutRef}
              >
                <div className="flex items-center text-lg font-bold cursor-pointer">
                  <span>About</span>
                  {aboutDropdown ? (
                    <IoIosArrowUp className="ml-2" />
                  ) : (
                    <IoIosArrowDown className="ml-2" />
                  )}
                </div>
                {aboutDropdown && (
                  <div className="absolute top-10 left-0 w-52 bg-white shadow-lg text-black py-2 rounded-se-3xl rounded-es-3xl overflow-hidden z-40">
                    {aboutLinks.map((link, index) => (
                      <div
                        key={index}
                        className="px-6 py-2 text-sm hover:bg-[#6d9051] duration-300"
                      >
                        <Link to={link.to} onClick={() => setToggle(false)}>
                          {link.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-500 underline-offset-8 transform -translate-x-1/2 group-hover:w-full"></span>
              </li>

              {/* Shop */}
              <li className="text-lg cursor-pointer">
                <a
                  href="https://bayava-shop.vercel.app"
                  className="flex items-center gap-2 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop
                </a>
              </li>

              {/* Profile */}
             {(user.user?._id || user.user?.id || user.user) && <li className="text-lg cursor-pointer font-bold">
                <Link to={"/my-account"} className="flex items-center gap-2">
                  <GoPerson size={30} fontWeight={'bold'} /> My Account
                </Link>
              </li>}
              <div className="flex items-center justify-between gap-2 font-bold">
                {(user.user?._id || user.user?.id || user.user) ? <button onClick={handleLogout} >Logout</button> : <Link to={isLoggedIn ? "/signup" : "/login"}>
                  <SmallYellowOutlineButton text="Get Started" />
                </Link>}

              </div>
            </ul>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div
            className="text-white cursor-pointer text-3xl md:hidden"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <IoMdClose className="w-7 h-7" />
            ) : (
              <IoIosMenu className="w-7 h-7" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {toggle && (
        <div className="fixed top-[10vh] left-0 w-full h-[90vh] bg-green-800 text-white z-40 overflow-auto">
          <ul className="flex flex-col gap-6 py-10">

            {links.map((link, index) => (
              <li key={index} className="px-4">
                <Link
                  to={link.to}
                  className="text-lg font-bold"
                  onClick={handleMobileLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Services Dropdown */}
            <li className="relative">
              <div
                className="flex items-center text-lg font-bold px-4 cursor-pointer"
                onClick={() => handleMobileDropdown("service")}
              >
                <span>Services</span>
                {mobileServiceDropdown ? (
                  <IoIosArrowUp className="ml-2" />
                ) : (
                  <IoIosArrowDown className="ml-2" />
                )}
              </div>
              {mobileServiceDropdown && (
                <ul className="w-40 flex flex-col gap-2 ml-6 text-start bg-white shadow-lg shadow-gray-800 p-2 text-black py-2 rounded-se-3xl rounded-es-3xl">
                  {serviceLinks.map((link, index) => (
                    <li key={index} className="px-4">
                      <Link
                        to={link.to}
                        className="text-base"
                        onClick={handleMobileLinkClick}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* About Dropdown */}
            <li className="relative">
              <div
                className="flex items-center text-lg px-4 font-bold cursor-pointer"
                onClick={() => handleMobileDropdown("about")}
              >
                <span>About</span>
                {mobileAboutDropdown ? (
                  <IoIosArrowUp className="ml-2" />
                ) : (
                  <IoIosArrowDown className="ml-2" />
                )}
              </div>
              {mobileAboutDropdown && (
                <ul className="w-48 flex flex-col ml-6 gap-2 text-start bg-white shadow-lg shadow-gray-800 p-2 text-black py-2 rounded-se-3xl rounded-es-3xl">
                  {aboutLinks.map((link, index) => (
                    <li key={index} className="px-4">
                      <Link
                        to={link.to}
                        className="text-base"
                        onClick={handleMobileLinkClick}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* External Shop Link */}
            <li className="px-4 font-semibold">
              <a
                href="https://bayava-shop.vercel.app"
                className="text-lg font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop
              </a>
            </li>

            {/* Get Started Button */}
            {(user.user?._id || user.user?.id || user.user) ? <li className="flex items-center justify-between gap-5 px-4 font-bold">
              <Link
                to={isLoggedIn ? "/signup" : "/login"}
                onClick={handleMobileLinkClick}
              >
                <SmallYellowOutlineButton
                  text="Get Started"
                />
              </Link>
            </li> : <button className="font-bold mr-auto px-4" onClick={handleLogout} >Logout</button>}


            {/* My Account */}
            {(user.user?._id || user.user?.id || user.user)&&<li className="px-4 flex items-center">
              <Link
                to={"/my-account"}
                className="text-lg font-bold flex items-center"
                onClick={handleMobileLinkClick}
              >
                <GoPerson size={25} className="mr-2" />
                My Account
              </Link>
            </li>}
          </ul>
        </div>
      )}

    </>
  );
}

export default Navbar;
