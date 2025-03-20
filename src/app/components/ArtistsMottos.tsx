"use client"
import React, { useState, useEffect } from 'react';

const mottos = [
  { artist: 'Vincent van Gogh', motto: "I dream my painting and I paint my dream." },
  { artist: 'Pablo Picasso', motto: "Every child is an artist. The problem is how to remain an artist once we grow up." },
  { artist: 'Leonardo da Vinci', motto: "Art is never finished, only abandoned." },
  // Add more mottos here
];

const ArtistMottos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mottos.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentMotto = mottos[currentIndex];

  return (
    <div className=" py-10 px-10  mx-auto" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>

      <div className="mx-auto">
        <div className="flex flex-col items-center justify-center mb-4 p-4 rounded-lg">
          <h3 className="text-xl font-semibold ">{currentMotto.artist}</h3>
          <p className="italic ">&quot;{currentMotto.motto}&quot;</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistMottos;