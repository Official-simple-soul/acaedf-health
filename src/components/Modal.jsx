import React, { useState } from 'react';

function Modal({ isOpen, onClose, children }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-all ease-in-out duration-500  ${
        isOpen ? 'opacity-1 z-50' : 'opacity-0 -z-10'
      }`}
    >
      <div
        className='fixed inset-0 bg-black opacity-50'
        onClick={onClose}
      ></div>
      <div className='bg-white p-4 rounded-lg z-50 w-[30rem]'>
        <div className='text-right'>
          <button
            className='text-gray-500 hover:text-gray-700'
            onClick={onClose}
          >
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
