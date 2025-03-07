import React from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.avif';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <Image src={logo} className="w-14 h-14 rounded-xs" alt="logo" />
      <ul className="flex space-x-4">
        <li><a href="#" className="text-white">HOME</a></li>
        <li><a href="#" className="text-white">ABOUT US</a></li>
        <li><a href="#" className="text-white">PROJECTS</a></li>
        <li><a href="#" className="text-white">STUDIO</a></li>
        <li><a href="#" className="text-white">PROCESS</a></li>
        <li><a href="#" className="text-white">REFERENCES</a></li>

      </ul>
      <button className="bg-white text-gray-800 px-4 py-2 rounded-xs">GET IN TOUCH</button>
    </nav >
  );
};

export default Navbar; 