'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const AboutUs = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="max-w-4xl mx-auto px-4 py-16 mt-10 mb-20">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg text-left mb-4 leading-relaxed ">
          Welcome to our company! We are dedicated to providing the best services in the industry.
          Our team of experts is committed to delivering high-quality solutions tailored to your needs.
        </p>
        <Image src="/aboutus.avif" alt="aboutus" width={600} height={400} className="rounded-lg shadow-xl w-full h-auto mb-10" />
        <p className="text-lg text-left mb-4 leading-relaxed ">
          Our mission is to innovate and lead in our field, ensuring customer satisfaction and excellence in every project.
          We believe in the power of collaboration and strive to build lasting relationships with our clients.
        </p>
        <p className="text-lg text-left mb-4 leading-relaxed">
          Thank you for choosing us. We look forward to working with you and achieving great success together.
        </p>

      </div >
      <div className="flex justify-center mt-8">
        <button className=" text-white px-4 py-2 rounded-xs cursor-pointer" onClick={() => router.push('/')}>
          Back to Home
        </button>
      </div>
    </div >
  );
};

export default AboutUs;