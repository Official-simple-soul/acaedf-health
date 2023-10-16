import React from 'react';

function Header() {
  return (
    <header className='px-8 font-bold bg-gray-900 py-5 text-white fixed w-full z-10 shadow-md'>
      <div className='flex justify-between items-center'>
        <div className='logo'>LOH-HEALTH</div>
        <nav className='flex space-x-10 items-center'>
          <ul className='flex items-center space-x-5'>
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
