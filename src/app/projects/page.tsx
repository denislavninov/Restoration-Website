'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Projects = () => {
  const router = useRouter();
  const projects = [
    { id: 1, title: 'Project One', description: 'Description of project one.', image: '/logo.avif ' },
    { id: 2, title: 'Project Two', description: 'Description of project two.', image: '/logo.avif' },
    { id: 3, title: 'Project Three', description: 'Description of project three.', image: '/logo.avif' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 mt-20 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {projects.map(project => (
          <div key={project.id} className=" shadow-lg rounded-xs overflow-hidden ">
            <Image src={project.image} alt={project.title} width={400} height={192} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className=" mb-4">{project.description}</p>
              <button className="bg-white text-black font-bold py-2 px-4 rounded-xs transition duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className=" text-white px-4 py-2 rounded-xs cursor-pointer" onClick={() => router.push('/')}>
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default Projects;