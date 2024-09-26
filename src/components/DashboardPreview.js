import React from 'react';

const DashboardPreview = () => {
  return (
    <div className="py-20 px-8 bg-primary text-textPrimary">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary">Technology Driven Approach</h2>
        <p className="mt-4">Our state-of-the-art AI-based imaging diagnosis system transforms the way medical professionals diagnose and treat a range of conditions.</p>
      </div>
      <div className="flex justify-center">
        <img
          src="/images/dashbord.jpg"
          alt="Dashboard Preview"
          className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        />
      </div>
    </div>
  );
};

export default DashboardPreview;
