'use client'
import React from 'react'
import { SlSocialInstagram, SlSocialFacebook, SlSocialTwitter, SlSocialLinkedin } from 'react-icons/sl'

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-b from-#323232 to-black text-white py-8 mt-10">
      <div className=" mx-auto px-4 flex flex-col justify-around h-full">
        <div className="flex flex-col md:flex-row justify-around items-center mb-4">

          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-center">Contact Us</h2>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-gray-400 text-2xl"><SlSocialInstagram /></a>
            <a href="#" className="text-white hover:text-gray-400 text-2xl"><SlSocialFacebook /></a>
            <a href="#" className="text-white hover:text-gray-400 text-2xl"><SlSocialTwitter /></a>
            <a href="#" className="text-white hover:text-gray-400 text-2xl"><SlSocialLinkedin /></a>
          </div>
        </div>
        <div className="mt-auto text-center pt-6">
          <span className='text-sm border-b border-white'>
            <p className="text-sm">&copy; 2025 Restoration Company. All rights reserved.</p>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;