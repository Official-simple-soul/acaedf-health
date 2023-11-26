import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className='px-2 lg:px-8 font-bold bg-gray-900 py-5 text-white fixed w-full z-10 shadow-md'>
      <div className='flex justify-between items-center'>
        <div className='logo'>LOH-HEALTH</div>
        <div className='md:hidden' onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? (
            <FaTimes className='text-xl' />
          ) : (
            <FaBars className='text-xl' />
          )}
        </div>
        <nav
          className={`${
            navOpen ? "h-80 py-10" : "h-0 overflow-hidden py-0"
          } transition-all ease-in-out duration-400 bg-gray-900 w-full top-16 absolute md:static flex flex-col justify-center  md:flex-row md:py-0 space-y-10 md:space-y-0 md:space-x-10 items-center`}
        >
          <ul className='flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5'>
            <li className=''>
              <a href='/'>HOME</a>
            </li>
            <li>CLINIC-CARE</li>
            <li>CHILDREN</li>
          </ul>
          <button className='bg-white text-gray-900 px-8 py-2 rounded-md text-sm'>
            Reach Us
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
