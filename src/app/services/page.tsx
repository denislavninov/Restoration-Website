'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

function Services() {
  const router = useRouter();
  return (
    <div>Services
      <h1>Services</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <button className="bg-black text-white px-4 py-2 rounded-md cursor-pointer" onClick={() => router.push('/')}>Back to Home</button>
    </div>
  )
}

export default Services