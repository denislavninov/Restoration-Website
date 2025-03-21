'use client'
import React, { useState } from 'react';
import studio from '../../../public/studio.avif';
import studio2 from '../../../public/studio2.avif';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Studio() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: studio,
      title: "Beautiful Landscape",
      description: "Experience the serene beauty of nature with this breathtaking landscape."
    },
    {
      image: studio2,
      title: "City Lights",
      description: "The vibrant city lights create a stunning view at night."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-40">
      <div className="carousel w-full max-w-6xl h-[90vh] sm:h-[80vh] md:h-[70vh] relative overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image src={slide.image} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        ))}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button onClick={prevSlide} className="btn btn-circle bg-black bg-opacity-50 text-white text-3xl sm:text-4xl md:text-5xl">‹</button>
          <button onClick={nextSlide} className="btn btn-circle bg-black bg-opacity-50 text-white text-3xl sm:text-4xl md:text-5xl">›</button>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className=" text-black bg-white px-6 py-3 rounded-md shadow-md cursor-pointer" onClick={() => router.push('/')}>Back to Home</button>
      </div>
    </div>
  );
}