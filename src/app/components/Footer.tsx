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
            <p className="text-sm">Email: altugkatmer@gmail.com</p>
            <p className="text-sm">Phone: +90 506 606 94 10</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/altugkatmer?igsh=MWg3aWV5YXJubGhmYg==" className="text-white hover:text-gray-400 text-2xl"><SlSocialInstagram /></a>
            <a href="https://www.facebook.com/tablorestorasyonu.altugkatmer/?locale=tr_TR" className="text-white hover:text-gray-400 text-2xl"><SlSocialFacebook /></a>
            <a href="#" className="text-white hover:text-gray-400 text-2xl"><SlSocialTwitter /></a>
            <a href="https://www.linkedin.com/in/altu%C4%9F-katmer-273a15167?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-white hover:text-gray-400 text-2xl"><SlSocialLinkedin /></a>
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