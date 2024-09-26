import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import CanvasAnimation from './CanvasAnimation';

const Hero = () => {
  return (
    <div className="bg-primary h-screen flex flex-col items-center justify-center text-center m-auto text-secondary" id="bg">
      <CanvasAnimation/>

      
      <div className="max-w-3xl mx-auto animate-fadeIn four type z-10">
        <h1 className="text-4xl md:text-5xl font-bold typing">
          Experience Lightning-Fast MRI/CT Sequence Uploads with Quick Reporting
        </h1>
        <button className="bg-accentBlue text-white px-8 py-3 mt-8 rounded-lg hover:bg-red-300 transition-all duration-300">
          Experience InsigthX
        </button>
      </div>
      <canvas></canvas>
      <canvas></canvas>
      <canvas></canvas>
    </div>
  );
};

export default Hero;
