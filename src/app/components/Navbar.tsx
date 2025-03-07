import React from 'react';
import Image from 'next/image';
import painter1 from '../../../public/painter1.avif'; // Replace with your image path
import logo from '../../../public/logo.avif';

const Navbar = () => {
  return (
    <div className="relative h-[500px] font-lora">
      <Image src={painter1} alt="painter1" layout="fill" objectFit="cover" className="z-0 bg-black opacity-60" />
      <nav className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
        <div className="flex items-center ">
          <Image src={logo} alt="logo" className="w-10 h-10 rounded-full" />
        </div>
        <ul className="flex space-x-4" style={{ color: 'var(--foreground)' }}>
          <li><a href="#" className="font-bold">ABOUT US</a></li>
          <li><a href="#" className="font-bold">PROJECTS</a></li>
          <li><a href="#" className="font-bold">STUDIO</a></li>
          <li><a href="#" className="font-bold">SERVICES</a></li>
          <li><a href="#" className="font-bold">GALLERY</a></li>
          <li><a href="#" className="font-bold">CONTACT US</a></li>
        </ul>
        <button className="bg-white text-gray-800 px-4 py-2 rounded-md">GET IN TOUCH</button>
      </nav>
      <div className="absolute top-1/2 right-1/3 ml-10 z-10" style={{ color: 'var(--foreground)' }}>
        <h1 className="text-5xl font-bold">Medium length hero heading goes here</h1>
        <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />   Suspendisse varius enim in eros elementum tristique.</p>
        <div className="mt-4">
          <button className="bg-white text-gray-800 px-4 py-2 rounded-md mr-2">Button</button>
          <button className="bg-white text-gray-800 px-4 py-2 rounded-md">Button</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;