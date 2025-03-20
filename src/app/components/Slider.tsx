"use client"
import React from 'react';
import Compare from 'react-compare-image';
import eskirumeli from '../../../public/eskirumeli.avif';
import yenirumeli from '../../../public/yenirumeli.avif';

const Slider = () => {

  return (
    <div className="flex justify-center items-center py-10" >
      <div className="shadow-lg rounded-lg p-6 w-full max-w-[1200px] md:h-[600px] sm:h-[400px] h-auto overflow-hidden relative flex flex-col items-center justify-center" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        <div className="w-full h-auto md:h-[500px] overflow-hidden relative flex items-center justify-center">
          <Compare
            leftImage={eskirumeli.src}
            rightImage={yenirumeli.src}
            sliderLineWidth={4}
            sliderLineColor="#ffffff"

          />
        </div>
        <p className="text-center mt-4 text-sm font-lora" style={{ color: 'var(--foreground)' }}>
          Experience the transformation of art through our interactive slider. Slide to see the before and after of our meticulous restoration process.
        </p>
      </div>
    </div>
  );
};

export default Slider;