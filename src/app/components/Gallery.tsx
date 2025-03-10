"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  '/meryem.avif',
  '/meryem.avif',
  '/meryem.avif',
  // Add more image paths here
];

const Gallery = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center shadow-lg rounded-lg p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-10 py-10" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        <h1 className="text-3xl font-bold font-lora text-center mb-6" style={{ color: 'var(--foreground)' }}>Gallery</h1>
        <h2 className="text-xl font-lora text-center mb-6" style={{ color: 'var(--foreground)' }}>-Artistic masterpieces from our collection-</h2>
        <p className="text-lg font-lora text-center mb-6" style={{ color: 'var(--foreground)' }}>
          "The aim of art is to represent not the outward appearance of things, but their inward significance." — Aristotle
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, }}
              transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={400}
                height={400}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                priority={true}
              />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button className="flex items-center justify-center bg-transparent text-white border-2 border-white px-4 py-2 rounded-md mt-4 hover:bg-white hover:text-gray-800">View More</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;