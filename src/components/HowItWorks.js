import React from 'react';
import { FaStethoscope, FaMicroscope, FaRegFileAlt } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <div className="relative pt-32 pb-80 text-textPrimary items-center m-auto" style={{ backgroundImage: "url('/images/shape-38.png')",backgroundSize:"cover",backgroundRepeat:"no-repeat" }}>
      <div className='mb-10 text-center m-auto'>
        <img src="/images/hero-shape-3.png"/>
      </div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Empower Your Hospital's Efficiency and Patient Care</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        <div className="p-8 bg-white text-secondary rounded-lg shadow-lg text-center hover:bg-red-600 hover:text-white transition-all duration-300">
          <div className="flex justify-center mb-4">
            <FaStethoscope className="text-6xl" />
          </div>
          <h3 className="text-xl font-bold">Upload Scans</h3>
          <p>Effortlessly upload MRI, CT, or X-ray scans onto InsigthX for quick analysis.</p>
        </div>

        <div className="p-8 bg-white text-secondary rounded-lg shadow-lg text-center hover:bg-red-600 hover:text-white transition-all duration-300">
          <div className="flex justify-center mb-4 ">
            <FaMicroscope className="text-6xl " />
          </div>
          <h3 className="text-xl font-bold">Lightning-Fast Analysis</h3>
          <p>Our AI technology rapidly analyzes the uploaded scans, generating detailed reports.</p>
        </div>

        <div className="p-8 bg-white text-secondary rounded-lg shadow-lg text-center hover:bg-red-600 hover:text-white transition-all duration-300">
          <div className="flex justify-center mb-4">
            <FaRegFileAlt className="text-6xl" />
          </div>
          <h3 className="text-xl font-bold">Radiologist's Approval</h3>
          <p>Reports are approved by radiologists before being passed on to healthcare providers.</p>
        </div>
      </div>

      {/* Wave Effect */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" className="fill-current text-primary">
          <path d="M0,0L1200,120L1200,240L0,240Z"></path>
        </svg>
      </div> */}
    </div>
  );
};

export default HowItWorks;
