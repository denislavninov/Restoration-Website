import React from 'react';
import Image from 'next/image';

const images = [
  '/meryem.avif',
  '/meryem.avif',
  '/meryem.avif',
  // Add more image paths here
];

const Gallery = () => {
  return (
    <div className="flex flex-col items-center justify-center shadow-lg rounded-lg p-6">
      <div className="px-10 py-10" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        <h1 className="text-3xl font-bold font-lora text-center mb-6" style={{ color: 'var(--foreground)' }}>Gallery</h1>
        <h2 className="text-xl font-lora text-center mb-6" style={{ color: 'var(--foreground)' }}>-Artistic masterpieces from our collection-</h2>
        <p className="text-lg font-lora text-center mb-6" style={{ color: 'var(--foreground)' }}>
          "The aim of art is to represent not the outward appearance of things, but their inward significance." — Aristotle
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <Image src={src} alt={`Gallery image ${index + 1}`} width={300} height={300} objectFit="cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;