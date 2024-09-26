import React from 'react';

const About = () => {
  return (
    <div className="py-20 px-8 bg-primary text-textPrimary">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary">Redefining Radiology with AI</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          At InsigthX, we are transforming radiology with cutting-edge AI technology, enabling faster, more accurate diagnoses and improved patient outcomes.
        </p>
      </div>

      <div className="text-center">
        <img
          src="/images/about.png"
          alt="AI Radiology"
          className="mx-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        />
      </div>
    </div>
  );
};

export default About;
