import React from 'react';

const Features = () => {
  return (
    <div className="bg-primary text-textPrimary py-20 px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary">Our Features</h2>
        <p className="mt-4 max-w-3xl mx-auto">
          Explore the key features that make InsigthX the leading AI-driven platform for radiology analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-primary text-secondary rounded-lg shadow-lg hover:bg-accentGreen hover:text-white transition-all duration-300">
          <h3 className="text-xl font-bold">Rapid Report Generation</h3>
          <p className="mt-2">Generate detailed reports swiftly using our advanced AI integration.</p>
        </div>

        <div className="p-8 bg-primary text-secondary rounded-lg shadow-lg hover:bg-accentGreen hover:text-white transition-all duration-300">
          <h3 className="text-xl font-bold">Effortless Scan Upload</h3>
          <p className="mt-2">Seamlessly upload scans to InsigthX for instant analysis.</p>
        </div>

        <div className="p-8 bg-primary text-secondary rounded-lg shadow-lg hover:bg-accentGreen hover:text-white transition-all duration-300">
          <h3 className="text-xl font-bold">AI-Powered Analysis</h3>
          <p className="mt-2">Our AI swiftly identifies abnormalities and generates detailed reports.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
