'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const AboutUs = () => {
  const router = useRouter();
  return (
    <div className="">
      <div className="max-w-4xl mx-auto px-4 py-16 mt-50 mb-20 bg-gradient-to-r from-slate-500 to-slate-700  shadow-2xl rounded-lg ">

        <p className="text-lg text-left mb-4 leading-relaxed ">
          Welcome to our company! We are dedicated to providing the best services in the industry.
          Our team of experts is committed to delivering high-quality solutions tailored to your needs.
        </p>
        <p className="text-lg text-left mb-4 leading-relaxed">
          Our mission is to innovate and lead in our field, ensuring customer satisfaction and excellence in every project.
          We believe in the power of collaboration and strive to build lasting relationships with our clients.
        </p>
        <p className="text-lg text-left mb-4 leading-relaxed">
          Thank you for choosing us. We look forward to working with you and achieving great success together.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;