'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="relative h-[500px] font-lora" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="absolute inset-0 z-0 bg-black opacity-60">
        <Image src="/painter1.avif" alt="painter1" fill style={{ objectFit: 'cover' }} />
      </div>
      <nav className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
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
        <button className="bg-white hover:bg-black hover:text-white text-gray-800 px-4 py-2 rounded-xs">GET IN TOUCH</button>
      </nav>
      <div className="absolute top-1/2 right-1/3 ml-10 z-10" style={{ color: 'var(--foreground)' }}>
        <h1 className="text-5xl font-bold">Medium length hero heading goes here</h1>
        <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Suspendisse varius enim in eros elementum tristique.</p>
        <div className="mt-4">
          <button className="bg-white hover:bg-black hover:text-white text-gray-800 px-4 py-2 rounded-xs mr-2">Button</button>
          <button className="bg-white hover:bg-black hover:text-white text-gray-800 px-4 py-2 rounded-xs">Button</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;