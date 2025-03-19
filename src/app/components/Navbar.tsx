'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = ({ contactRef }: { contactRef: React.RefObject<HTMLDivElement | null> }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

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
      <nav className="absolute top-0 left-0 right-0 p-4 flex justify-around h-[100px] items-center z-10">
        <div className="flex items-center">
          <Image src="/logo.avif" alt="logo" width={40} height={40} className="rounded-full" onClick={() => router.push('/')} />
        </div>
        <ul className="flex space-x-8" style={{ color: 'var(--foreground)' }}>
          <Link href="/about-us" className="font-bold">ABOUT US</Link>
          <Link href="/projects" className="font-bold">PROJECTS</Link>
          <Link href="/studio" className="font-bold">STUDIO</Link>
          <Link href="/services" className="font-bold">SERVICES</Link>
          <Link href="/gallery" className="font-bold">GALLERY</Link>
        </ul>
        <button className="bg-white hover:bg-black hover:text-white text-gray-800 px-4 py-2 rounded-xs" onClick={scrollToContact}>GET IN TOUCH</button>
      </nav>
      <div className="absolute top-1/2  ml-10 z-10" style={{ color: 'var(--foreground)' }}>
        {isHomePage && (
          <>
            <h1 className="text-5xl font-bold">Medium length hero heading goes here</h1>
            <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Suspendisse varius enim in eros elementum tristique.</p>
            <div className="mt-4">
              <button className="bg-white hover:bg-black hover:text-white text-gray-800 px-4 py-2 rounded-xs mr-2">Button</button>
              <button className="bg-white hover:bg-black hover:text-white text-gray-800 px-4 py-2 rounded-xs">Button</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;