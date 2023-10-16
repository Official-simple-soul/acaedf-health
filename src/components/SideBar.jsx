import React from 'react';

function Sidebar() {
  return (
    <aside className='bg-gray-900 text-white w-64 h-screen'>
      <nav className='p-4'>
        <ul>
          <li className='mb-2'>
            <a
              href='/dashboard'
              className='block py-2 hover:bg-secondary transition duration-300'
            >
              Dashboard
            </a>
          </li>
          <li className='mb-2'>
            <a
              href='/patients'
              className='block py-2 hover:bg-secondary transition duration-300'
            >
              Patients
            </a>
          </li>
          <li className='mb-2'>
            <a
              href='/appointments'
              className='block py-2 hover:bg-secondary transition duration-300'
            >
              Appointments
            </a>
          </li>
          <li className='mb-2'>
            <a
              href='/records'
              className='block py-2 hover:bg-secondary transition duration-300'
            >
              Medical Records
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
