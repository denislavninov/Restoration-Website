import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.avif'
import { SlSocialInstagram, SlSocialFacebook, SlSocialTwitter, SlSocialLinkedin } from 'react-icons/sl'
function Footer() {
  return (
    <footer className="h-[300px] bg-gradient-to-b from-#323232 to-black text-white py-8 mt-40">
      <div className="container mx-auto px-4 flex flex-col justify-between h-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div>
            <Image src={logo} alt='logo' width={50} height={50} className="rounded-full" />
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400 text-2xl"><SlSocialInstagram /></a>
            <a href="#" className="text-white hover:text-gray-400 text-2xl"><SlSocialFacebook /></a>
            <a href="#" className="text-white hover:text-gray-400 text-2xl"><SlSocialTwitter /></a>
            <a href="#" className="text-white hover:text-gray-400 text-2xl"><SlSocialLinkedin /></a>
          </div>
        </div>
        <div className="mt-auto text-center pt-6">
          <span className='text-sm border-b border-white'>
            <p className="text-sm">&copy; 2025 Your Company. All rights reserved.</p>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer