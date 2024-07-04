import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosMenu, IoMdClose } from "react-icons/io";

const links = [
  { to: '/', label: 'Home' },
  { to: '/adopt-gaumata', label: 'About Gaumata' },
  { to: '/about-project', label: 'About Project' },
  { to: '/join-mission', label: 'Join Mission' },
  { to: '/shop', label: 'Shop' },
  { to: '/contact-us', label: 'Contact us' }
];

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-green-800 md:bg-transparent p-2 fixed top-0 w-full z-50">
      <div className="max-w-[1240px] flex items-center justify-between py-[2px] md:py-[15px] mx-auto">
        <div className="flex items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden md:ml-5">
            <img 
              src='https://kamdhenuseva.com/wp-content/uploads/2021/05/Untitled-design-4.png' 
              className='w-full h-full object-cover'
              alt='Logo'
            />
          </div>
        </div>
        <ul className="hidden md:flex text-black gap-10 ml-auto items-center mr-10">
          {links.map((link, index) => (
            <li key={index} className="group relative">
              <Link to={link.to} className='text-base md:text-xl font-bold'>
                {link.label}
              </Link>
              <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-500 underline-offset-8 transform -translate-x-1/2 group-hover:w-full"></span>
            </li>
          ))}
          <li>
            <Link to='/donate'>
              <button className='bg-[#6d9051] text-white px-8 py-1 rounded-3xl'>
                Donate
              </button>
            </Link>
          </li>
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
          className={`duration-300 md:hidden w-3/4 h-screen text-black fixed bg-white top-[60px] ${
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
      <hr className="hidden md:block"/>
    </div>
  );
}

export default Navbar;
