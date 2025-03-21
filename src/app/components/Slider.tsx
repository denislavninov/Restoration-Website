"use client"
import React from 'react';
import Compare from 'react-compare-image';
import eskirumeli from '../../../public/eskirumeli.avif';
import yenirumeli from '../../../public/yenirumeli.avif';

const Slider = () => {

  return (
    <div id="slider" className="flex justify-center items-center py-10 mt-10" >
      <div className="shadow-lg rounded-lg p-2 w-full h-[300px] max-w-[1200px] md:min-w-[600px] md:h-[600px]  overflow-hidden relative flex flex-col items-center justify-center" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        <div className="w-full h-full  overflow-hidden relative flex items-center justify-center">
          <Compare
            leftImage={eskirumeli.src}
            rightImage={yenirumeli.src}
            sliderLineWidth={4}
            sliderLineColor="#ffffff"
            leftImageCss={{ width: '100%', height: '100%', objectFit: 'cover' }}
            rightImageCss={{ width: '100%', height: '100%', objectFit: 'cover' }}
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