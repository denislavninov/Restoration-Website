'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const AboutUs = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to our company! We are dedicated to providing the best services in the industry.
          Our team of experts is committed to delivering high-quality solutions tailored to your needs.
        </p>
        <p className="text-lg mb-4">
          Our mission is to innovate and lead in our field, ensuring customer satisfaction and excellence in every project.
          We believe in the power of collaboration and strive to build lasting relationships with our clients.
        </p>
        <p className="text-lg">
          Thank you for choosing us. We look forward to working with you and achieving great success together.
        </p>
      </div>
      <button className="bg-black text-white px-4 py-2 rounded-md" onClick={() => router.push('/')}>Back to Home</button>
    </div>
  );
};

export default AboutUs;