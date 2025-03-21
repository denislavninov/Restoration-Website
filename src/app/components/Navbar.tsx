'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = ({ contactRef }: { contactRef: React.RefObject<HTMLDivElement | null> }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div
      className={`font-lora ${isHomePage ? 'relative h-[100vh]' : ''}`}
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
    >
      {isHomePage && (
        <div className="absolute inset-0 z-0 bg-black opacity-60">
          <Image src="/painter1.avif" alt="painter1" fill style={{ objectFit: 'cover' }} />
        </div>
      )}
      <nav className="absolute top-0 left-0 right-0 p-4 flex items-center h-[100px]  z-10 md:justify-evenly justify-start">
        <div className="flex items-center">
          <Image src="/logo.avif" alt="logo" width={40} height={40} className="rounded-full" onClick={() => router.push('/')} />
        </div>
        <div className="md:hidden flex items-center justify-center ml-auto">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white mr-2 text-2xl">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex space-x-8 ${isMenuOpen ? 'flex' : 'hidden'} md:space-x-8 mt-8 md:mt-0`} style={{ color: 'var(--foreground)' }}>
          <Link href="/about-us" className="font-bold text-xl">ABOUT US</Link>
          <Link href="/projects" className="font-bold text-xl">PROJECTS</Link>
          <Link href="/studio" className="font-bold text-xl">STUDIO</Link>
          <Link href="/services" className="font-bold text-xl">SERVICES</Link>
        </ul>
        <button className="hidden md:block bg-white hover:bg-black hover:text-white text-gray-800 text-md px-4 py-2 rounded-md" onClick={scrollToContact}>GET IN TOUCH</button>
      </nav>
      <div className="absolute bottom-0 left-0 mb-4 ml-4 z-10" style={{ color: 'var(--foreground)' }}>
        {isHomePage && (
          <>
            <h1 className="text-5xl font-bold">The Art of Painting</h1>
            <p className="mt-4 text-xl font-bold">We are a team of artists who are passionate about creating beautiful art.</p>
            <div className="mt-4">
              <button className="bg-white hover:bg-black hover:text-white text-gray-800 text-lg px-4 py-2 rounded-md mr-2" onClick={() => {
                const sliderElement = document.getElementById('slider');
                if (sliderElement) {
                  sliderElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}>Scroll Down</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;