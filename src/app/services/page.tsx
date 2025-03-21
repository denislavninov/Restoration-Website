'use client'
import React from 'react';
import { FaPaintBrush, FaHammer, FaTools } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaPaintBrush className="text-4xl" />,
      title: "Art Restoration",
      description: "We provide expert art restoration services to bring your artwork back to its original glory."
    },
    {
      icon: <FaHammer className="text-4xl" />,
      title: "Sculpture Repair",
      description: "Our team specializes in repairing and restoring sculptures of all sizes and materials."
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: "Custom Framing",
      description: "We offer custom framing solutions to preserve and display your artwork beautifully."
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-20 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <div key={index} className=" p-6 rounded-lg shadow-lg text-center bg-gradient-to-b from-current  to-transparent">
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
            <p className="">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}