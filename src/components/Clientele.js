import React from 'react';

const Clientele = () => {
  return (
    <div className="py-20 px-8 bg-primary text-textPrimary">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary">Our Global Clientele</h2>
        <p className="mt-4">InsigthX is trusted by healthcare providers across the globe, transforming radiology practices worldwide.</p>
      </div>

      <div className="flex justify-center">
        <img
          src="/images/worldmap.jpg"
          alt="Global Clientele"
          className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-blend-lighten"
        />
      </div>
    </div>
  );
};

export default Clientele;
