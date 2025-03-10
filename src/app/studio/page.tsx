'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const Studio = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Studio</h1>
      <button className="bg-black text-white px-4 py-2 rounded-md cursor-pointer" onClick={() => router.push('/')}>Back to Home</button>
    </div>
  )
}

export default Studio;