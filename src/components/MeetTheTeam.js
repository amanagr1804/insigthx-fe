import React from 'react';

const MeetTheTeam = () => {
  return (
    <div className="bg-primary py-20 px-8 text-textPrimary">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-secondary">MEET THE TEAM</h2>
        <p className="mt-4">Our team combines deep expertise in healthcare and AI technology to deliver solutions that meet the evolving needs of radiology practices worldwide.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Founder */}
        <div className="bg-primary p-6 rounded-lg shadow-lg hover:bg-accentGreen transition-all duration-300">
          <img src="/images/founder.jpg" alt="Founder" className="mx-auto rounded-full h-40 w-40 object-cover mb-4" />
          <h3 className="text-xl font-bold">[FOUNDER]</h3>
          <p className="mt-2">A visionary leader with extensive experience in healthcare technology, driving InsigthX's mission to transform radiology with AI.</p>
        </div>

        {/* CTO */}
        <div className="bg-primary p-6 rounded-lg shadow-lg hover:bg-accentGreen transition-all duration-300">
          <img src="/images/cto.png" alt="Chief Technology Officer" className="mx-auto rounded-full h-40 w-40 object-cover mb-4" />
          <h3 className="text-xl font-bold">CHIEF TECHNOLOGY OFFICER</h3>
          <p className="mt-2">A specialist in AI algorithm development, leading the technical innovation at InsigthX.</p>
        </div>

        {/* CMO */}
        <div className="bg-primary p-6 rounded-lg shadow-lg hover:bg-accentGreen transition-all duration-300">
          <img src="/images/cmo.png" alt="Chief Medical Officer" className="mx-auto rounded-full h-40 w-40 object-cover mb-4" />
          <h3 className="text-xl font-bold">CHIEF MEDICAL OFFICER</h3>
          <p className="mt-2">A seasoned radiologist ensuring our AI solutions meet the highest clinical standards and align with radiology needs.</p>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
